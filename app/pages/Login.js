import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import AppBtn from '../components/AppBtn';
import AppTextInput from '../components/AppTextInput';


export default function Login({ navigation }) {
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(34, 31, 96, 1)',
                alignItems: 'center'
            }}>
                <SafeAreaView></SafeAreaView>
                <Text style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 40,
                    position: 'relative',
                    top: 60
                }}>
                    Login
                </Text>
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        position: 'relative',
                        top: 100
                    }}
                >
                    <AppTextInput
                        placeholder={'Username'}
                    />
                    <AppTextInput
                        placeholder={'Password'}
                    />

                </View>

                <AppBtn
                    txt={'Login'}
                    backgroundColor={'rgba(255, 255, 241, 0.9)'}
                    width={'90%'}
                    height={60}
                    borderRadius={10}
                    top={145}
                    fontWeight={'600'}
                    fontSize={20}
                    onPress={() => navigation.navigate('Main')}

                />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text
                        style={{
                            color: '#fff',
                            position: 'relative',
                            top: 153,
                        }}
                    >Don't have an account? Sign Up.</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

