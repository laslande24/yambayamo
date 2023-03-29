import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import BottomTab from './BottomTab'
import IndependentView from './../Screens/IndependentStudentView'

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="IndependentView" component={IndependentView} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    )
}

export default RootStack;