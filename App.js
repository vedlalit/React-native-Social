/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity,TextInput} from 'react-native';
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createSwitchNavigator } from 'react-navigation'; 
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Forgot from './components/Forgot';
import StatusBar from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Homescr from './components/Homescr';
import SettingsScreen from './components/SettingsScreen';
import Details from './components/Details';
import Profile from './components/Profile';
//import createMaterialBottomTabNavigator  from 'react-navigation-material-bottom-tabs';
import DiscoverScreen from './components/DiscoverScreen';
//import { Header } from 'react-native-elements';
//import * as firebase from 'firebase';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: 'black',
    }
    };
  render() {
    return (
      <View style={styles.container1}> 
      <View style={styles.container}>
       <Image  source = {require('./components/Logo.png')}/>
       <Text style={styles.label}>lorem epsium</Text>
       <Text style={styles.signuph}>Home Screen</Text>
       <View style={styles.containerreg}>
        <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('SignUp')}><Text>SIGN UP</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LogIn')}><Text>LOG IN</Text></TouchableOpacity>
       </View>
     </View>
     </View>
    );
  }
}
class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: 'black',
    }
    };
  render() {
    return (
      <SignUp></SignUp>
    );
  }
}
class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: 'black',
    }
    };
  render() {
    return (
       <LogIn></LogIn>
    );
  }
}
class ForgotScreen extends React.Component {
  static navigationOptions = {
    title: 'Reset Password',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: 'black',
    }
 };
  render() {
    return (
       <Forgot></Forgot>
    );
  }
}
class ProfileScr extends React.Component{

  render()
  {
    return(
      <Profile></Profile>
    );
  }
}
class DetailsScr extends React.Component{
  render()
  {
    return(
    
      <Details></Details>
    );
  }
}
class Discoverscr extends React.Component{
  render()
  {
    return(
      <DiscoverScreen></DiscoverScreen>
    );
  }
}
class SettingsScre extends React.Component{
  render()
  {
    return(
      <SettingsScreen></SettingsScreen>
    );
  }
}
class Homescre extends React.Component{
  render()
  {
    return(
      <Homescr></Homescr>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Details:{screen:Details,
    navigationOptions:{
      tabBarOptions: {
        showLabel: false,
        activeTintColor:'orange',
        
      },
      tabBarIcon:({tintColor})=>(<Icon name="ios-albums" color={tintColor} size={35}/>)
    }},
    DiscoverScreen:{screen:DiscoverScreen,
      navigationOptions:{
        
        tabBarOptions: {
          showLabel: false,
          activeTintColor:'orange',
          
        },
        tabBarIcon:({tintColor})=>(<Icon name="ios-compass" color={tintColor} size={35}/>)
      }},
  
    Profile:{screen:Profile,
      navigationOptions:{
        tabBarOptions: {
          showLabel: false,
          activeTintColor:'orange',
       
        },
        tabBarIcon:({tintColor})=>(<Icon name="ios-contact" color={tintColor} size={35}/>)
      }},
      SettingsScreen:{screen:SettingsScreen,
        navigationOptions:{
          tabBarOptions: {
            showLabel: false,
            activeTintColor:'orange',
           
          },
          tabBarIcon:({tintColor})=>(<Icon name="ios-notifications" color={tintColor} size={35}/>)
        }},
        Homescr:{screen:Homescr,
          navigationOptions:{
            tabBarOptions: {
              showLabel: false,
              activeTintColor:'orange',
             
            },
            tabBarIcon:({tintColor})=>(<Icon name="ios-menu" color={tintColor} size={35}/>)
          }},
  },
  {
    initialRouteName:'Profile',
  },
  {
    /*navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    }*/
  }
);

const RootStack = createStackNavigator(
  {
    HomeScreen:HomeScreen,
    SignUp:SignUpScreen,
    LogIn:LogInScreen,
    Forgot:ForgotScreen,
    //TabNavigator:{screen:TabNavigator}
  },
);

const AppSwitchNavigator= createSwitchNavigator({

  RootStack:{screen:RootStack},
  TabNavigator:{screen:TabNavigator}

});

const AppContainer = createAppContainer(AppSwitchNavigator);



const styles = StyleSheet.create({
  container1:{
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'

  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    top: 180
  },
  /*containerreg:{
    backgroundColor:'black',
    top: 40,
    alignItems: 'center',

  },*/
  label:{
    //top: -20,
    color:'white'
  },
  signuph:{
    color:'white',
    top:10
  },
  input:{
    top: 10,
    borderWidth: 1,
        borderColor: 'white',
        width: 20,
        height: 40,
        backgroundColor: 'black',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 3,
        fontSize: 18,
        fontWeight: '800'

  },
  termText:{
    color: 'white',
    fontSize: 10,
    top:10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 10,
    top: 20,
    width: 270,
    marginTop: 16,
  }
});
export default class App extends React.Component {
  
  render() {
    return( <AppContainer />
    );
  }
}
