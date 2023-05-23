
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%'}}
                    resizeMode='contain'
                />
            </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.Text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Login')}
            > 
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>
        </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#2B2B33'
    },
    containerLogo: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '40%',
        flex:5,
    },
    containerForm: {
        flex:1,
        backgroundColor: '#2B2B33',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    Text:{
        fontSize: 16,
        color: '#a1a1a1',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
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
    }
})