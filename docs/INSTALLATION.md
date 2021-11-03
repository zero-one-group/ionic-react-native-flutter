We already setup the codebase in monorepo using [Nx](https://nx.dev/)

**Nb.** I have not installed nx cli in locally, just using `npx` only. So in this documentation I will explain like in my local machine.


Table of Contents
- [How to initiate nx workspace](#how-to-initiate-nx-workspace)
- [Setup ionic react app](#setup-ionic-react-app)
- [Setup ionic react app](#setup-ionic-react-app-1)
- [How to run applications](#how-to-run-applications)


## How to initiate nx workspace
To start initiate workspace you can run the following command
```bash
npx create-nx-workspace examples
```
- Then choose an `empty` workspace


## Setup ionic react app
Follow these commands to setup ionic react.
```bash
yarn add @nxtend/ionic-react
yarn nx generate @nxtend/ionic-react:init
yarn nx g @nxtend/ionic-react:application profile-ionic
```

## Setup ionic react app
Follow these commands to setup flutter
```bash
yarn add @nxrocks/nx-flutter
yarn nx g @nxrocks/nx-flutter:create profile-flutter
```

## How to run applications
```bash
# Install dependencies
yarn

# To run ionic app
yarn start:ionic

# To run flutter app
yarn start:flutter
```
