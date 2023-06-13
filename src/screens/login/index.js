import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

//import { Auth } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    const navigation = useNavigation();
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');

    function userlogin() {
        signInWithEmailAndPassword(auth, userMail, userPass)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Quarto');
            //alert('Login Efetuado...');
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY" delay={500}
                    source={require('../../assets/logo.png')}
                    style={{ width: '18%'}}
                    resizeMode='contain'
                />
            </View>
        
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail:</Text>
            <TextInput
                placeholder="Digite seu e-mail..."
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
                style={styles.input}
            />

            <Text style={styles.title}>Senha:</Text>
            <TextInput
                placeholder="Sua senha..."
                autoCapitalize="none"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}
            //onPress={() => navigation.navigate('Home')}
            onPress={(userlogin)}
            > 
                <Text style={styles.buttonText}> Acessar </Text>
            </TouchableOpacity>
           
        </Animatable.View >

        <Animatable.View style={styles.containerBase}>
        <TouchableOpacity style={styles.register}
            onPress={() => navigation.navigate('NewUser')}
            > 
            <Text style={styles.registerText}> Não tenho cadastro </Text>
            </TouchableOpacity>
        </Animatable.View>
        
        </View>
        
    );

}

const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor: '#2B2B33'
    },
    containerLogo: {
        flex:2,
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        
    },
    containerForm: {
        flex:1,
        backgroundColor: '#808080',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 18,
        color: '#FFFFFF',
        justifyContent: 'center',
        fontWeight: 'bold'
    },

    button:{
        flex:1,
        position: 'absolute',
        backgroundColor: '#D98017',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
       
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    register:{
        flex:1,
        position: 'absolute',
        
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerText:{
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    },
    containerBase:{
        flex: 1
    }

})