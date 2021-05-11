# MagicMirror (React)

## Overview

An IoT project inspired by the original [Magic Mirror](https://magicmirror.builders/) by Michael Teeuw.

Initially, I'd hope to clone thie original repo and add some customizations on top of the default modules, however it is written in Angular which I haven't got knowledge of, so I endeavoured to see if I could create similar functionality using React on the client.

If you'd like to get an idea of how this app works, you can check out the [Figma Protoype](https://www.figma.com/proto/miwkYYZhCHXaGtNZ2O13bb/MyMagicMirror-UI?page-id=210%3A1&node-id=205%3A116&viewport=194%2C368%2C0.16894406080245972&scaling=scale-down).

Note: Prototype has added functionality in places for easier navigation, as the actual app relies on realtime communication via websockets, so there aren't any navigation indications (back/return icons, navbar etc.).

## Running the project locally

- Fork, then clone the project locally

From your forked repo:

### `git clone`

- Install dependencies required for the app to run in development mode.

On the command line or in the terminal of your preferred editor, you can run:

```
npm install
# or
yarn

```

- Fire up the app in development mode by running:

```
npm start
# or
yarn run start

```

## Dependencies

- [React](https://reactjs.org/)
- [React-DOM](https://www.npmjs.com/package/react-dom)
- [Chakra UI](https://chakra-ui.com/)

## Roadmap

I aim to continue to build and extend this application over time. Here are some of the key features I'm either working on, or planning to work on: 

- Next.js - Migrate from pure React client and separate server to Next.js
- GraphQL - Migrate REST infastructure to a GraphQL server, using Apollo to interact with data on the client.
- Testing - Write Unit and Integration tests to gain confidence that our application is working as we expect it to.
- Customisation
    1. Module approach - Users can have total control of what data they wish to have on their mirror, as well as setting some default styling options. This will most likely be done through a config file.
    2. Remote - Users can configure the remote app (still currently private) with a login process either with credentials being set via an env file (app is intended to always run in development) or using auth, if necessary.
