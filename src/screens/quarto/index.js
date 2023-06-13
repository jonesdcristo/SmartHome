import React, { Component } from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import database from 'firebase/compat/database'

export default function Quarto(){
//const navigation = useNavigation();
const firebaseConfig = {
  apiKey: "AIzaSyDsjIe5Ov25pVesIPNn2BTkF5HZulRBBOs",
  authDomain: "login-smarthome-1968d.firebaseapp.com",
  databaseURL: "https://login-smarthome-1968d-default-rtdb.firebaseio.com",
  projectId: "login-smarthome-1968d",
  storageBucket: "login-smarthome-1968d.appspot.com",
  messagingSenderId: "20163368291",
  appId: "1:20163368291:web:b5ced7574a74864d96af56",
  measurementId: "G-2TCVDGCPZN"  
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }


class Led extends Component {
  

  state ={
    status: []
  }

  componentDidMount () {
    firebase
    .database()
    .ref('Led/')
    .child('Status')
    .on('value', (snapshot) => {
     const status = (snapshot.val());
     this.setState({status});
  });
  }

  ligarDesligarLed =() =>{
    var led = firebase.database().ref('Led');
    if(this.state.status == 0){
      led.child('Status').set(1);
    }else if (this.state.status == 1){
      led.child('Status').set(0);
    }
    
  }
 render() {
    return (
      <View>
        <View style={estilos.principal}>
        <Image source={require('../../assets/logo.gif')}
      />
        </View>

        <View style={estilos.principal}>
         <Text style={estilos.texto}>Projeto Led</Text>
        </View>

        <View style={estilos.principal}>
        <View style={estilos.espacamentoIcone}>
        <Image source={require('../../assets/led.png')}/>
        </View>        
        <Button style={estilos.botao}
        title="Ligar/Desligar Led"
        color="#c0c0c0"
        onPress={this.ligarDesligarLed}
      />
        </View>
      </View>
    );
  }
}
}
const estilos = StyleSheet.create ({

  principal: {
    alignItems: 'center',
    padding: 30
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  botao:{
    height: 12
   },
   espacamentoIcone:{
     padding: 15
   }


})
