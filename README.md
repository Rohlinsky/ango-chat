# Chat on Angular and Nest

**Version 1.0.0**

## Prepare
Run command `docker-compose build`, then run command `docker-compose up`, 
or shortly just run `docker-compose up --build`

## Look in browser
Open in your favorite browser link `http://localhost:4200/`. 
You can open multiple tabs in your browser to chat with oter peaple.

## Anotation:
1) By default name of user is `Anonimus`, but by clicking on item with mark `you`, for example: `Anonimus (you)`, you can open an popup with input of your current name, and change it to your `nickname`, after finishing just press button `save`, and close popup. And your `nickname`, will be updated in each active tabs of chat.
2) Now `userId` is same just like `connectionId`.

## Implemented
1) Chat as multiple clients
2) Anonimues usage, with oportiunity self recognizing
3) Auto login usage.
4) Group chat.
5) Docker start, without requirements instalation all packages localy.

## Not implemented eat
1) Direct messaging.
2) Multiple rooms.
3) Personal chat.
4) Emotion box.
5) Proxy settings for npm
6) Wrapper for socket object.
7) Finalized work with usernames as aliases.
8) Finalized data storage.

@ Denis Rohlinsky
