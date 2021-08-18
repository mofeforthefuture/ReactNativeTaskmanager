import 'react-native-gesture-handler';
import * as React from 'react';
import Status from '../pages/Status'
import Calls from '../pages/Calls'
import Camera from '../pages/Camera'
import Chats from '../pages/Chats'
import Settings from '../pages/Settings'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faBullseye, faPhoneAlt, faCamera, faComments, faCog } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../constants/themes';
const Tab = createBottomTabNavigator();




export default function Whatsapp() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {

                    elevation: 0,
                    backgroundColor: COLORS.tabBlack,
                    height: '7%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }}>
            <Tab.Screen name="Status" component={Status} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                    }}>
                        <FontAwesomeIcon icon={faBullseye} size={25} color={focused ? COLORS.blue : COLORS.grey} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.grey }}>Status</Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Calls" component={Calls} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} size={25} color={focused ? COLORS.blue : COLORS.grey} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.grey, fontWeight: '600' }}>Calls</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Camera" component={Camera} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                    }}>
                        <FontAwesomeIcon icon={faCamera} size={25} color={focused ? COLORS.blue : COLORS.grey} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.grey, fontWeight: '600' }}>Camera</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Chats" component={Chats} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                    }}>
                        <FontAwesomeIcon icon={faComments} size={25} color={focused ? COLORS.blue : COLORS.grey} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.grey, fontWeight: '600' }}>Chats</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 3,
                    }}>
                        <FontAwesomeIcon icon={faCog} size={25} color={focused ? COLORS.blue : COLORS.grey} />
                        <Text style={{ color: focused ? COLORS.blue : COLORS.grey, fontWeight: '600' }}>Settings</Text>
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