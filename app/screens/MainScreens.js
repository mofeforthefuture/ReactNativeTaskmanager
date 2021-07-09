import * as React from 'react';
import Todo from '../pages/Todo'
import Home from '../pages/Home'
import User from '../pages/User';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faList, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();




export default function MainScreens() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'relative',
                    bottom: 25,
                    left: '5%',
                    elevation: 0,
                    backgroundColor: '#ccc',
                    borderRadius: 15,
                    height: 90,
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...styles.shadow
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
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faHome} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
                        <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>Home</Text>
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