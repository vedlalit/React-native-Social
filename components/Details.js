//This is an example code for Bottom Navigation//
import React from 'react';
import { withNavigation } from 'react-navigation'; 
import LogIn from './LogIn';
//import icon from 'react-native-vector-icons/Ionicons'
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { Header} from 'react-native-elements';
//import {Header} from 'react-native-elements';
//import all the basic component we have used

 class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
    
  };
  //Home Screen to show in Home Option
  render() {
    return (
      //<SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.container1}>
         <Header 
      backgroundColor="white"
      //placement="center"
      leftComponent={{icon:'menu',color:'#808080'}}
      centerComponent={{text:'Details',style: {color:'#808080'}}}
      />
      <View style={styles.container2}>
     
        <Text style={{ fontSize: 25,color:'Black' }}> Details</Text>
        
        </View>
        </View>
     
       // </SafeAreaView>
  
    );
  }
  }
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#D3D3D3',
      padding: 10,
      top: 20,
      width: 80,
      marginTop: 16
    },
      container1:{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center'
      },
      container2:{
        flex:1,
        width:500,
        justifyContent: 'center', 
        alignItems: 'center' , 
        backgroundColor:'white'
     
      }
  });
  export default withNavigation(Details);
         // style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           //</View>
         // <TouchableOpacity
           // style={styles.button}
            //onPress={() => this.props.navigation.navigate('Settings')}>
            //<Text>Go to settng Tab</Text>
          //</TouchableOpacity>
          //<TouchableOpacity
            //style={styles.button}
            //onPress={() => this.props.navigation.navigate('Details')}>
            //<Text>Open Details Screen</Text>
          //</TouchableOpacity>
        //</View>
      //</View>
  //  );
  //}
//}
//const styles = StyleSheet.create({
  //button: {
    //alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    //padding: 10,
    //width: 300,
    //marginTop: 16,
  //},
//},);