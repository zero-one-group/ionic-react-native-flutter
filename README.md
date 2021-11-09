This project was generated using [Nx](https://nx.dev).

> **Nb.** I have not installed nx cli locally, just using `npx` only. So in this Readme doc I will explain like in my local machine.


Table of Contents
- [Setup NX Workspace](#setup-nx-workspace)
- [Setup Ionic React](#setup-ionic-react)
- [Setup Flutter](#setup-flutter)
- [Setup React Native](#setup-react-native)
- [How to run applications](#how-to-run-applications)


## Setup NX Workspace
To start initiate workspace you can run the following command.
```bash
npx create-nx-workspace examples
```
- Then choose an `empty` workspace


## Setup Ionic React
Follow these commands to setup in ionic react.
```bash
yarn add @nxtend/ionic-react
yarn nx generate @nxtend/ionic-react:init
yarn nx g @nxtend/ionic-react:application profile-ionic
```

Or you can more explore in the [Nx Ionic React Documentation](https://nxtend.dev/docs/ionic-react/getting-started)


## Setup Flutter
Please to ensure, you have been installed flutter on your local machine!.
If don't please follow [this official guideline](https://flutter.dev/docs/get-started/install) to install it.

Then Follow these commands to setup in flutter.

```bash
yarn add @nxrocks/nx-flutter
yarn nx g @nxrocks/nx-flutter:create profile-flutter
```

You also can more explore at [Nx Flutter Documentation](https://github.com/tinesoft/nxrocks/tree/develop/packages/nx-flutter#nx-flutter)


## Setup React Native
Please to ensure, you have been installed React Native Environment on your local machine!
If don't please follow [the official guideline](https://reactnative.dev/docs/environment-setup) to setup it.

Then Follow these commands to setup in flutter
```bash
yarn add @nrwl/react-native
yarn nx g @nrwl/react-native:app profile-react-native
```

More details can read at [Nx React Native Documentation](https://github.com/nrwl/nx-react-native)


## How to run applications
```bash
# Install dependencies
yarn

# To run ionic app
yarn start:ionic

# To run flutter app using command below
# or simply by press either F5 (Windows) or fn+F5 (Mac) in VSCode (runing your emulator first)
yarn start:flutter

# To run react native app using browser
start:rn-web

# To run react native app using android emulator
start:rn-android

# To run react native app using XCode emulator
start:rn-ios
```
