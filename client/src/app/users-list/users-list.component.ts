import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../types';
import Socket = SocketIOClient.Socket;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() socket: Socket | null = null;
  @Input() users: User[] = [];
  @Input() currentUserId = '';
  ngOnInit(): void {
    this.bindEvents();
  }

  bindEvents(): void {
    if (this.socket === null) {
      return;
    }

    this.socket.on('user-list-broadcast', (data: User[]) => {
      this.updateUserList(data);
    });
  }

  updateUserList(users: User[]): void {
    this.users = users;
  }
}
