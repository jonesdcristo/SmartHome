import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home/'
import Login from '../screens/login/'
import NewUser from '../screens/newUser/newUser'
import Perfil from '../screens/perfil'
import Weather from '../screens/tempUmid'
import Lampada from '../screens/lampada'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                //options={ {headerShadowVisible} }
            />

            <Stack.Screen
                name="Login"
                component={Login}
                //options={{ headerShadowVisible }}
            />

            <Stack.Screen
                name="NewUser"
                component={NewUser}
                //options={{ headerShadowVisible }}
            />

            <Stack.Screen
                name="Perfil"
                component={Perfil}
                //options={{ headerShadowVisible }}
            />

            <Stack.Screen
                name="Weather"
                component={Weather}
                //options={{ headerShadowVisible }}
            />

            <Stack.Screen
                name="Lampada"
                component={Lampada}
                //options={{ headerShadowVisible }}
            />


        </Stack.Navigator>

    )
}