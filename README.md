This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) instructions. This app currently only supports iOS, so you only need to follow the iOS steps to get started.

This application uses the [Locationforecast API](https://api.met.no/weatherapi/locationforecast/2.0/documentation) and [Sunrise API](https://api.met.no/weatherapi/sunrise/3.0/documentation) provided by met.no to retrieve weather data.

## 1: Install dependencies
Before you can start the application, you'll need to make sure all dependencies are installed.

Firstly, you need to make sure you have the correct node version:
```bash
node --version
# v23.1.0
```

If the node version is matching the one defined in `package.json` (`v23.1.0`), you should be able to install and run the application seamlessly. From the root folder, run
```bash
npm i
```

This will install all the dependencies defined in `package.json` into the `node_modules` folder.

You will also need to install the pods for iOS. To do this, navigate to the `ios` folder in the terminal, and run
```bash
pod install
```

> **Note:** if you install new npm packages you may need to run `pod install` from the `ios` folder for the iOS project to be updated accordingly.

## 2: Run the application

To run the application, open a new terminal in the root folder of the project and run

```bash
npm start
```

When prompted, type `i` in the same terminal to run the iOS simulator. The simulator should open automatically. If not, you can open it through Xcode by navigating to `Xcode -> Open Developer Tool -> Simulator` and rerun `npm start` in the terminal.

Wait for the build to finish and the application to open in the simulator.


## Step 3: Modifying your App

Now that you have successfully run the app, you can proceed with making the desired changes.

If the changes are not showing automatically, you can reload the app by typing `r` in the terminal where the app is running from, or hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in the iOS Simulator.

## Running tests

### Unit tests
The unit tests in this project are implemented using [Jest](https://jestjs.io/docs/getting-started) and located in the same folder as the respective units to be tested.

To run the unit tests you can run `npm run test` from the root folder. Jest will look for files with the filename ending `.test.ts` within the `src` folder, as defined in `jest.config.js`.

### UI tests
The UI tests are implemented with [Maestro](https://maestro.mobile.dev/) and located in `__ui_tests__/`.

#### Install Maestro
Before you run these tests, make sure to install Maestro:

```bash
curl -fsSL "https://get.maestro.mobile.dev" | bash

# OR if you prefer using Homebrew (macOS)
brew tap mobile-dev-inc/tap
brew install maestro
```
> For more details, see the [Maestro docs](https://maestro.mobile.dev/getting-started/installing-maestro).

#### Run UI tests
When Maestro is installed, after running the application (`npm start`), open a new terminal and navigate to the `__ui_tests__` folder. From here you can run the tests with the following command:
```bash
# $filename can be one of the following:
# home               - tests for the Home screen
# location_details   - tests for the LocationDetails screen
maestro test $filename.yaml
```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.