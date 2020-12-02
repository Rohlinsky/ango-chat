import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../types';
import Socket = SocketIOClient.Socket;

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  @Input() socket: Socket | null = null;
  @Input() currentUserId = '';
  messages: Message[] = [];

  ngOnInit(): void {
    this.bindEvents();
  }

  bindEvents(): void {
    if (this.socket === null) {
      return;
    }

    this.socket.on('message-broadcast', (data: Message) => {
      if (data.user && data.message) {
        this.messages.push(data);
      }
    });
  }
}
