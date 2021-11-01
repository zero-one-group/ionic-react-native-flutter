We already setup the codebase in monorepo using [Nx](https://nx.dev/)

**Nb.** I have not installed nx cli in locally, just using `npx` only. So in this documentation I will explain like in my local machine.


Table of Contents
- [How to start](#how-to-start)
- [How to setup ionic react app](#how-to-setup-ionic-react-app)


## How to start
To start initiate workspace you can run the following command
```bash
npx create-nx-workspace examples
```
- Then choose an `empty` workspace


## How to setup ionic react app
Follow these commands to setup ionic react.
```
yarn add @nxtend/ionic-react
yarn nx generate @nxtend/ionic-react:init
yarn nx g @nxtend/ionic-react:application profile-ionic
```
