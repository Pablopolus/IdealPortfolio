This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Demo](#demo)
* [Dependencies](#dependencies)
* [Installation guide](#installation-guide)
* [Run it!](#run-it)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
* [Technologies used](#technologies-used)


## Demo

To see video demo open file inside `demo` folder

## Dependencies

Before you run the app, please make sure you have the following items installed

* Xcode
* node 8.6.1 or greater
* npm 4.6.1
* Android Studio with an AVD (Android Virtual Decice) configured
* Watchman package


## Installation Guide

1. Clone [this](https://github.com/DolapeUy/IdealPortfolio.git) repository to a local directory

  `git clone https://github.com/DolapeUy/IdealPortfolio.git`

2. Navigate to the project

  `cd IdealPortfolio`

3. Install Dependencies with `npm` using the console.

  `npm install`

4. To run the app on your device install Expo .

  * ios [here](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
  * android [here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)


### Run it!

In the terminal run:

1. Start packaer with `npm`.

`npm start`

2. Run emulator

  a. `i` for iOS emulator | `a` for Android emulator
  b. scan QR code with your celphone using Expo App (please make sure the computer and the device are connected to the same WIFI)



## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:


## Technologies used

  * Javascript (ES6) with React Native as main Framework
  * Redux