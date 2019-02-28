import firebase from 'react-native-firebase'

export default class Loading extends React.Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? 'HomeScreen':'SignUp')
        })
    }
}