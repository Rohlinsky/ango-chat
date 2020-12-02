import { Component } from '@angular/core';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import { Maybe, User } from '../types';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket: Socket | null = null;
  users: User[] = [];
  user: User | null = null;

  constructor() {
    this.setupSocketConnection();
  }

  setupSocketConnection(): void {
    this.socket = io(SOCKET_ENDPOINT);

    this.socket.on('connect', () => {
      if (this.socket !== null) {
        this.user = {
          id: this.socket.id,
          username: ''
        };
      }
    });

    this.recognizeSelf();
  }

  recognizeSelf(): void {
    if (this.socket === null) {
      return;
    }

    this.socket.on('account', (user: User) => {
      this.user = user;
    });
  }
}
