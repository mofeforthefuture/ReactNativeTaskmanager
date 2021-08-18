import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import AppBtn from '../components/AppBtn';
import AppTextInput from '../components/AppTextInput';
import { COLORS, } from '../constants/themes';
import { Formik } from 'formik'
import * as yup from 'yup'
import ActivityIndicator from '../components/ActivityIndicator';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSchema = yup.object().shape({

    name: yup
        .string()
        .required('Username is required')
        .min(5, 'Username cannot be less than 5'),

    password: yup.string().required('Password is required').min(6, 'Password cannot be less tham 6'),
})
export default function Login({ navigation }) {
    const [userDet, setUserDet] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const login = async (value) => {
        // setIsVisible(true)
        // await fetch('https://enigmatic-plains-12808.herokuapp.com/user/login', {
        //     method: 'POST',
        //     body: JSON.stringify(value),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json'
        //     },
        // }).then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             data = data[0]
        //             console.log('...response Obj', data)
        //             setUserDetails(data);
        //             setIsVisible(false)
        //         } else {
        //             console.log('error')
        //         }
        //     }).catch(error => {
        //         console.log('...error', error);
        //     })

        navigation.navigate('Whatsapp')
    }

    const setUserDetails = async (data) => {
        try {
            await AsyncStorage.setItem('userDetails', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.purple,
                alignItems: 'center'
            }}>
                <SafeAreaView></SafeAreaView>
                <ActivityIndicator visible={isVisible} />
                <Formik
                    initialValues={{
                        name: '',
                        password: ''
                    }}
                    onSubmit={login}
                    validationSchema={authSchema}
                >
                    {formikProps => (
                        <>
                            <Text style={{
                                color: COLORS.white,
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
                                {formikProps.touched.name && formikProps.errors.name ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.name && formikProps.errors.name}</Text> : <></>}
                                <AppTextInput
                                    placeholder={'Username'}
                                    onChangeText={formikProps.handleChange('name')}
                                    onBlur={formikProps.handleBlur('name')}
                                />
                                {formikProps.touched.password && formikProps.errors.password ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.password && formikProps.errors.password}</Text> : <></>}
                                <AppTextInput
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    placeholder={'Password'}
                                    secureTextEntry={true}
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
                                onPress={formikProps.handleSubmit}

                            />
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        position: 'relative',
                                        top: 153,
                                    }}
                                >Don't have an account? Sign Up.</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </>
    )
}

