import { Component, Input, OnInit } from '@angular/core';
import { Maybe, User, Message } from '../../types';
import Socket = SocketIOClient.Socket;

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input() user: User | null = null;
  @Input() socket: Socket | null = null;

  ngOnInit(): void {
  }

  renameUser(): void {
    if (!this.socket || !this.user) {
      return;
    }

    this.socket?.emit('rename-user', this.user);
  }
}
