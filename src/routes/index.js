import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'
import Login from '../screens/login'
import NewUser from '../screens/newUser/newUser'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                //options={{ headerShadowVisible }}
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

        </Stack.Navigator>

    )
}