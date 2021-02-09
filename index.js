/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Main from './src/Pages/Main/index'
import NewEntry from './src/Pages/NewEntry/index'
import Report from './src/Pages/Report/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);
