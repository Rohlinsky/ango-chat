export type Maybe<T> = null | T;

export interface UserList {
	[name: string]: string;
}

export interface User {
    id: string;
    username: string;
}

export interface MessageWrapper {
    user: User
    message: string;
}
