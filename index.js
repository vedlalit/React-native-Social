/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Tab from './App';
import {name as appName} from './app.json';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Forgot from './components/Forgot';
import Homescr from './components/Homescr';
import SettingsScreen from './components/SettingsScreen';
import Details from './components/Details';
import Profile from './components/Profile';
import DiscoverScreen from './components/DiscoverScreen';
AppRegistry.registerComponent(appName, () => App);