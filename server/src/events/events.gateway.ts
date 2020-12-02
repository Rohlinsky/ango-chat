import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import { MessageWrapper, User } from '../types';
import { UserService } from '../user/user.service';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private userService: UserService) {
  }

  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): void {
      console.log('events', data);
  }

  @SubscribeMessage('identity')
  identity(@MessageBody() data: number): void {
    console.log('identity', data);
  }

  @SubscribeMessage('message')
  chatMessage(client: Socket, {message}: MessageWrapper): void {
    this.server.emit('message-broadcast', {
        message,
        user: this.userService.getUser(client.id)
    });
  }

  @SubscribeMessage('rename-user')
  renameUser(client: Socket, { username }: User): void {
    this.userService.renameUser(client.id, username);
    this.server.emit('user-list-broadcast', this.userService.getUsers());
  }

  handleDisconnect(client: Socket): void {
    this.userService.removeUser(client.id);
    this.server.emit('user-list-broadcast', this.userService.getUsers());
  }

  handleConnection(client: Socket): void {
    const user = { id: client.id, username: 'Anonymous' };
    this.userService.putUser(user);

    client.emit('account', user);
    this.server.emit('user-list-broadcast', this.userService.getUsers());
  }
}
