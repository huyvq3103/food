/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FoodList from './Screen/Food/FoodList';

AppRegistry.registerComponent(appName, () => FoodList);
