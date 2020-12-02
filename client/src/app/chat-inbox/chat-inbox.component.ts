import { Component, Input, OnInit } from '@angular/core';
import { Maybe, User, Message } from '../../types';
import Socket = SocketIOClient.Socket;

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {
  @Input() socket: Socket | null = null;
  @Input() user: User | null = null;
  message = '';

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (!this.socket) {
      return;
    }

    this.socket?.emit('message', {
      message: this.message
    });

    this.message = '';
  }
}
