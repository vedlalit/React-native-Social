import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import LogIn from './LogIn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withNavigation } from 'react-navigation'; 
//import addItem from './ItemService'

//import * as console from 'console';




/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

//type Props = {};
//const {navigate} = this.props.navigation;
class SignUp extends Component {
 
     

  constructor(props) {
    super(props)

    this.state = {
      Fullname: '',
      Email:'',
      Phone:'',
      Password:''
    }
  }
  
    /* var config = {
      databaseURL: "<database-url>",
      projectId: "<project-id>",
  };

  firebase.initializeApp(config);
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
  
  writeUserData(email,fname,lname){
    firebase.database().ref('UsersList/').push({
        email,
        fname,
        lname
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}
//this.handleChange = this.handleChange.bind(this);
//this.handleSubmit = this.handleSubmit.bind(this);

   /* handleChange(e) {
      this.setState({
        Fullname: e.nativeEvent.text,
        //Email: e.nativeEvent.text,
        //Phone: e.nativeEvent.text,
        //Password: e.nativeEvent.text

      });
    }
    handleSubmit() {
      //console.log(this.state.Fullname,this.state.Email,this.state.Phone,this.state.Password)
      addItem(this.state.Fullname);
      AlertIOS.alert(
        'Item saved successfully'
       );
    }*/


  render() {
    return (
      <View style={styles.container1}>
      <View style={styles.container} onPress={this.LogIn}>
      <Image  source = {require('./Logo.png')}/>
      
       <View style={styles.containerreg}>
       <TextInput style={styles.input}
          placeholder='Full name'
          autoCapitalize="none"
          placeholderTextColor='#808080'
          border-color='yellow'
          value={this.state.Fullname}
          onChangeText={(text) => this.setState({Fullname: text})}
          
          />
          <TextInput style={styles.input}
          placeholder=' Email'
          autoCapitalize="none"
          placeholderTextColor='#808080'
          border-color='yellow'
          value={this.state.Email}
          onChangeText={(text) => this.setState({Email: text})}
          
          />
          <TextInput style={styles.input}
          placeholder='Phone'
          autoCapitalize="none"
          placeholderTextColor='#808080'
          border-color='yellow'
          value={this.state.Phone}
          onChangeText={(text) => this.setState({Phone: text})}
          />
          <TextInput style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='#808080'
          border-color='yellow'
          onChangeText={(text) => this.setState({Password: text})}
          />
          <Text style={styles.termText}>
           I agree to the 
            <Text> </Text>
               < Text  style={styles.Textund} onPress={this.props.onPress}>
                   
                     Terms&conditions
               </Text>
                   <Text> </Text>
                 <Text style={styles.Text}>
                     includes cookies
                 </Text>
        </Text>
        <TouchableOpacity
            style={styles.button} onPress ={() => this.props.navigation.navigate('TabNavigator')} >
            
            <Text>Agree & Sign Up</Text>
          </TouchableOpacity>
       
       </View>
       <Text style={styles.button1}>Already an existing user?</Text>
       <Text style={styles.button2} onPress={() => this.props.navigation.navigate('LogIn')}> LogIn</Text>
   </View>
   </View>
    );
  }
}

/*class LogInScreen extends React.Component {
  render() {
    return (
       <LogIn></LogIn>
    );
  }
}

/*const RootStack = createStackNavigator(
  {
    SignUp:SignUpscr,
    LogIn: LogInScreen
  },
  {
    initialRouteName: 'SignUp',
    }
  
);*/

//const AppContainer = createAppContainer(RootStack);

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
    top:30
  },
  containerreg:{
    //backgroundColor:'black',
    //top: 40,
    alignItems: 'center',

  },
  label:{
    top: 30  ,
    //backgroundcolor:'white'
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
  Textund:{
    textDecorationLine:'underline'
  }
});



export default withNavigation(SignUp);
/*export default class SignUp extends React.Component {
  render() {
    return <AppContainer />;
  }
}*/