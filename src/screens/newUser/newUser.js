import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function NewUser(){
    const navigation = useNavigation();

    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');

    function newUser(){
        if(userMail === '' || userPass ===- '' || userRePass === ''){
            alert('Todos os campos devem ser preenchidos');
            return;
        }
        if(userPass !== userRePass){
            alert('A senha e a confirmação não são iguais');
            return;
        } else{
            createUserWithEmailAndPassword( auth, userMail, userPass)
            .then((UserCredencial) => {
                const user = UserCredencial.user;
                alert('O usuário' + userMail + 'foi criado. Faça o login');
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                navigation.navigate('Login');
            })
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Novo Usuário</Text>
            <TextInput
            style={styles.formInput}
            placeholder='E-mail de usuário'
            keyboardType='email-address'
            autoCapitalize='none'
            value={userMail}
            onChangeText={setUserMail}
            />
            <TextInput
            style={styles.formInput}
            placeholder='Senha de usuário'
            autoCapitalize='none'
            secureTextEntry
            value={userPass}
            onChangeText={setUserPass}
            />
            <TextInput
            style={styles.formInput}
            placeholder='Repita a senha'
            autoCapitalize='none'
            secureTextEntry
            value={userRePass}
            onChangeText={setUserRePass}
            />
           
           <TouchableOpacity style={styles.sendButton}
            onPress={newUser}
            //onPress={() => navigation.navigate('NewUser')}
            > 
            <Text style={styles.textButton}> Cadastrar </Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#2B2B33',
        
    },
    formTitle:{
        fontSize: 36,
        fontWeight: 'bold',
        color:'#D98017',
        margin:10,
    },
    formInput:{
        borderColor:'#D98017',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,

    },
    sendButton:{
        backgroundColor: '#D98017',
        with: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    textButton:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    }

});

//<Pressable>
//style={styles.sendButton}
//onPress={newUser}

//<Text style={styles.textButton}>
  //  Cadastrar
//</Text>
//</Pressable>