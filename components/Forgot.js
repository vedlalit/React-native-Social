import React, {Component} from 'react';
import { Image } from 'react-native';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity,TextInput} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './SignUp';
import LogIn from './LogIn';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

//type Props = {};
class Forgot extends Component {
  render() {
    return (
      <View style={styles.container1}>
      <View style={styles.container}>
      <Image  source = {require('./Logo.png')}/>
       <Text style={styles.label}>lorem epsium</Text>
       <Text style={styles.signuph}>Reset Password</Text>
       <View style={styles.containerreg}>
       <TextInput style={styles.input}
          placeholder='Phone/Email/ID'
          autoCapitalize="none"
          placeholderTextColor='#808080'
          border-color='yellow'
          onChangeText={val => this.onChangeText('Full name', val)}
          />
        <TouchableOpacity
            style={styles.button}>
             <Text>Reset</Text>
          </TouchableOpacity>
       </View>
       <Text style={styles.button1} onPress={() => this.props.navigation.navigate('LogIn')}>LogIn</Text>  
       <Text style={styles.button2} onPress={() => this.props.navigation.navigate('SignUp')}> SignUp</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    top:200
  },
  containerreg:{
    backgroundColor:'black',
    top: 40,
    alignItems: 'center',

  },
  label:{
    //top: -5,
    color:'white'
  },
  signuph:{
    color:'white',
    top: 30
  },
  input:{
    top: 10,
    borderWidth: 1,
        borderColor: 'white',
        width: 270,
        height: 40,
        backgroundColor: 'black',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 3,
        fontSize: 18,
        fontWeight: '500'

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
  },
  button1:{
    color:'white',
    top: 120
  },
  button2:{
    color:'white',
    top:130
  },
  container1:{
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'
  }
});
export default withNavigation(Forgot);