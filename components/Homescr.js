//This is an example code for Bottom Navigation//
import React from 'react';
import { withNavigation } from 'react-navigation'; 
import LogIn from './LogIn';
//import icon from 'react-native-vector-icons/Ionicons'
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
//import {Header} from 'react-native-elements';
//import all the basic component we have used

 class Homescr extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  state = {
    search:'',
  };
  updateSearch = search => {
    this.setState({search});
  };
  //Home Screen to show in Home Option
  render() {
  const { search } = this.state;
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#E0E8EF'}}>
      <View style={styles.container3}>
      <SearchBar 
      inputStyle={{width:150}}
      lightTheme
      style={styles.searchstyle} placeholder="Search" onChangeText={this.updateSearch} value={search}/>
       
      <View style={styles.container2}>
     
        <Text style={{ fontSize: 25,color:'Black' }}> Menu</Text>
        <TouchableOpacity
            style={styles.button} onPress={() => this.props.navigation.navigate('LogIn')}>
            
            <Text style={color='white'}>Logout</Text>
          </TouchableOpacity>
        </View>
        </View>
     
       </SafeAreaView>
  
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
    /*searchstyle:{
    color:'white',
    width:300
    },*/
      container1:{
        backgroundColor: '#E0E8EF',
        flex: 1,
        alignItems: 'center'
      },
      container2:{
        flex:1,
        width:400,
        justifyContent: 'center', 
        alignItems: 'center' , 
        backgroundColor:'#E0E8EF'
     
      },
      container3:{
        flex:1,
        //width:300,
        //backgroundColor:'white'
      }
  });
  export default withNavigation(Homescr);
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