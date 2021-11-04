We already setup the codebase in monorepo using [Nx](https://nx.dev/)

**Nb.** I have not installed nx cli in locally, just using `npx` only. So in this documentation I will explain like in my local machine.


Table of Contents
- [Initiate setup nx workspace](#initiate-setup-nx-workspace)
- [Setup in ionic react](#setup-in-ionic-react)
- [Setup in flutter](#setup-in-flutter)
- [How to run applications](#how-to-run-applications)


## Initiate setup nx workspace
To start initiate workspace you can run the following command
```bash
npx create-nx-workspace examples
```
- Then choose an `empty` workspace


## Setup in ionic react
Follow these commands to setup in ionic react.
```bash
yarn add @nxtend/ionic-react
yarn nx generate @nxtend/ionic-react:init
yarn nx g @nxtend/ionic-react:application profile-ionic
```

## Setup in flutter
Please to ensure, you have been installed flutter on your local machine!.
If don't please follow [this official guideline](https://flutter.dev/docs/get-started/install) to install it.

Then Follow these commands to setup in flutter
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

# To run flutter app using command below
# or simply by press either F5 or fn+F5 in VSCode (runing your emulator first)
yarn start:flutter
```
