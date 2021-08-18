import 'react-native-gesture-handler';
import * as React from 'react';
import Todo from '../pages/Todo'
import User from '../pages/User';
import Chat from './Chat.stack';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faList, faComment, faUser } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../constants/themes';
const Tab = createBottomTabNavigator();




export default function Main() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {

                    elevation: 0,
                    backgroundColor: COLORS.white,
                    height: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }}>
            <Tab.Screen name="Todo" component={Todo} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faList} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
                        <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>Todo</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faComment} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
                        <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>Chat</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="User" component={User} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faUser} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
                        <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>User</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    }
})