/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {FoodList} from './Screen';

// import {ProductGridView} from './Screen';

AppRegistry.registerComponent(appName, () => FoodList);
