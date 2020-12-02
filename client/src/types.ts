export type Maybe<T> = null | T;

export interface User {
  id: string;
  username: string;
}

export interface Message {
  user: User;
  message: string;
}

export interface Message {
    user: User;
    message: string;
}
