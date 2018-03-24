# Team up

![demo](https://i.imgur.com/lev9yKg.gif)

![color-line](https://i.imgur.com/ufmIs45.png)

A simple application to demonstrate Real time editing content with websockets.

## `server`

Socket io server which runs on `localhost:4001`. It handle the client connections. Every message is now in `update content` channel. This will change to dynamic rooms in future.

## `web`

This is a React app which contains a `Slate JS editor` where we can write stuff (which syncs).

Any types of contributions are welcome.
