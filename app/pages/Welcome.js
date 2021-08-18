import React from 'react'
import { View, Text, SafeAreaView, } from 'react-native';
import AppBtn from '../components/AppBtn';
import { COLORS, } from '../constants/themes';


export default function Welcome({ navigation }) {
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.purple,
                alignItems: 'center'
            }}>
                <SafeAreaView></SafeAreaView>
                <Text style={{
                    color: COLORS.white,
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
                    top={'69%'}
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
                    top={'71%'}
                    fontWeight={'600'}
                    fontSize={25}
                    onPress={() => navigation.push('SignUp')}

                />
            </View>
        </>
    )
}
