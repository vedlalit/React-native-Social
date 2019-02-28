import React, {Component} from 'react';
import { Image } from 'react-native';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity,TextInput} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './SignUp';
import Forgot from './Forgot';
//import ProfileScreen from './Profile';
//import ProfileScreen from './pages/ProfileScreen';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

//type Props = {};
class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      Password:''
    }
}

  render() {
    return (
      <View style={styles.container1}>
      <View style={styles.container}>
      <Image  source = {require('./Logo.png')}/>
       <Text style={styles.label}>lorem epsium</Text>
       <Text style={styles.signuph}>LogIn</Text>
       <View style={styles.containerreg}>
       <TextInput style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='#808080'
          border-color='yellow'
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput style={styles.input}
          placeholder=' Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='#808080'
          border-color='yellow'
          value={this.state.Password}
          onChangeText={(text) => this.setState({Password: text})}
          />
        <TouchableOpacity
            style={styles.button}  onPress={() => this.props.navigation.navigate('TabNavigator')}>
             <Text>LOG IN</Text>
          </TouchableOpacity>
       </View>
       <Text style={styles.button1} onPress={() => this.props.navigation.navigate('Forgot')}> Forgot Password?</Text>
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
    top: 80
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
    alignItems: 'center',
  }
});
export default withNavigation(LogIn);