import React from 'react'
import { View, Text, SafeAreaView, } from 'react-native';
import AppBtn from '../components/AppBtn';


export default function Welcome({ navigation }) {
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(34, 31, 96, 1)',
                alignItems: 'center'
            }}>
                <SafeAreaView></SafeAreaView>
                <Text style={{
                    color: '#000',
                    fontWeight: '600',
                    fontSize: 40,
                    position: 'relative',
                    top: 60
                }}>
                    Welcome
                </Text>

                <AppBtn
                    txt={'Login'}
                    backgroundColor={'rgba(255, 255, 241, 0.9)'}
                    width={'90%'}
                    height={60}
                    borderRadius={10}
                    top={560}
                    fontWeight={'600'}
                    fontSize={25}
                    onPress={() => navigation.push('Login')}
                />
                <AppBtn
                    txt={'Signup'}
                    backgroundColor={'rgba(255, 255, 241, 0.9)'}
                    width={'90%'}
                    height={60}
                    borderRadius={10}
                    top={575}
                    fontWeight={'600'}
                    fontSize={25}
                    onPress={() => navigation.push('SignUp')}

                />
            </View>
        </>
    )
}
