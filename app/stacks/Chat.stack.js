import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import UsersChatList from '../pages/UsersChatList';
import Dm from '../pages/Dm';


const Stack = createStackNavigator();

export default function Chat() {
    return (
        <Stack.Navigator initialRouteName="UsersChatList" headerMode='none'>
            <Stack.Screen name="UsersChatList" component={UsersChatList} />
            <Stack.Screen name="Dm" component={Dm} />

        </Stack.Navigator>

    )
}
