/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './source/size/size-guide.screen.js';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
