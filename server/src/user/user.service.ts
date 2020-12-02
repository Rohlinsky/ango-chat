import {Injectable} from '@nestjs/common';
import {Maybe, User} from '../types';

@Injectable()
export class UserService {

    private users: User[] = [];

    public getUsers(): User[] {
        return this.users
    }

    public getUser(id: string): Maybe<User> {
        return this.users.find(user => user.id === id) ?? null;
    }

    public putUser(user: User): void {
        this.users = [...this.users, user];
    }

    public removeUser(id: string): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    public renameUser(id: string, username: string): void {
        this.users = this.users.map(user => user.id !== id ? user : {
            ...user,
            username
        });
    }
}

