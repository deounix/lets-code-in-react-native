import {AppRegistry} from "react-native";

import TelegramApp from "./telegram/app";
import {name as appName} from "./app.json";

// disable logging, warning ... etc on production build
if (!__DEV__) {
  console.log = () => {};
  console.time = () => {};
  console.timeLog = () => {};
  console.timeEnd = () => {};
  console.warn = () => {};
  console.count = () => {};
  console.countReset = () => {};
  console.error = () => {};
  console.info = () => {};
}

AppRegistry.registerComponent(appName, () => TelegramApp);
