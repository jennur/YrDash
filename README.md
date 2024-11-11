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


# Approach
1. Defined the base structure for the project by organizing the different parts (screens, components, services, utils, ...) into different files and folders. I also added the skeleton for the screens and components by using some mock data. 
2. Implemented the fetching of the actual data from the API and parsed the response to align with the defined structure. I had to adjust the type for the `LocationList` (`TLocationSummary[]` -> `TLocation[]`) slightly to avoid having to make multiple calls for the already retrieved data.
3. Added styling for the different screens and components.
4. Added unit tests with Jest.
5. Added UI tests with Maestro.

# Possible improvements
- To keep a cleaner git log I see that I could've made smaller commits and e.g. 
   - separated styling from other commits.
   - kept the local storage implementation as a separate commit, as well as the implementation of the default/user location functions.
   - kept the implementation of the `getCurrentWeather` function and the data parsing as a separate commit.
- Rename some of the components (e.g. `Detail` -> `WeatherDetail` and `ListItem` -> `LocationListItem`) to make the responsibility more clear.
- As of now there is no limit to how many recent user locations are being stored/displayed, and this should probably be limited to a smaller number.
- The sunrise/sunset hours should be displayed in local time, and not in UTC.
- In the `Temperature` component I'm assuming that the temperature is either 'celsius' or 'farenheit', which is probably a valid assumption to make, but it should anyway be confirmed.
- Instead of passing down the `TLocation` object with a separate property for the units, I could've included the unit in the actual value during the data parsing.
- To make sure the incoming data from the API is as expected, the response should be typed.
- To make the application more flexible, I could've used a geocoding API to get the lat/long coordinates for any location, and have it not be limited to the hardcoded values in `nameToGeoCoords`.
- Add more unit tests, e.g. for the utils functions
- ...