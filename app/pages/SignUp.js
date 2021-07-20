import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import AppBtn from '../components/AppBtn';
import AppTextInput from '../components/AppTextInput';
import { COLORS, } from '../constants/themes';
import { Formik } from 'formik'
import * as yup from 'yup'
import ActivityIndicator from '../components/ActivityIndicator';
import { data } from 'browserslist';



const authSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('Firstname is required')
        .min(3, 'Firstname cannot be less than 3'),
    lastName: yup
        .string()
        .required('Lastname is required')
        .min(3, 'Lastname cannot be less than 3'),
    name: yup
        .string()
        .required('Username is required')
        .min(5, 'Username cannot be less than 5'),

    password: yup.string().required('Password is required').min(6, 'Password cannot be less tham 6'),
    confirmPassword: yup.string().required('Confirm password is required').min(6, ' Confirm password cannot be less tham 6')
})

export default function SignUp({ navigation }) {
    const [isVisible, setIsVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [err, setErr] = useState('')
    const signUp = async (value) => {
        console.log(value)
        setIsVisible(true)
        await fetch('https://enigmatic-plains-12808.herokuapp.com/user/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(value)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.message) {
                    setMessage(data.message)
                    setErr('')
                } else {
                    setErr(data)
                    setMessage('')
                }
            })
        setIsVisible(false)
        navigation.navigate('Login')
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
                        firstName: '',
                        lastName: '',
                        name: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={signUp}
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
                                SignUp
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    position: 'relative',
                                    top: 100
                                }}
                            >
                                {message ? <Text style={{ color: 'green', width: '80%' }}>{message}</Text> : null}
                                {err ? <Text style={{ color: 'red', width: '80%' }}>{err}</Text> : null}
                                {formikProps.touched.firstName || formikProps.errors.firstName ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.firstName && formikProps.errors.firstName}</Text> : null}
                                <AppTextInput
                                    placeholder={'First name'}
                                    onChangeText={formikProps.handleChange('firstName')}
                                    onBlur={formikProps.handleBlur('firstName')}
                                />
                                {formikProps.touched.lastName || formikProps.errors.lastName ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.lastName && formikProps.errors.lastName}</Text> : null}
                                <AppTextInput
                                    onBlur={formikProps.handleBlur('lastName')}
                                    onChangeText={formikProps.handleChange('lastName')}
                                    placeholder={'Last name'}
                                />
                                {formikProps.touched.name || formikProps.errors.name ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.name && formikProps.errors.name}</Text> : null}
                                <AppTextInput
                                    onBlur={formikProps.handleBlur('name')}
                                    onChangeText={formikProps.handleChange('name')}
                                    placeholder={'Username'}
                                />
                                {formikProps.touched.password || formikProps.errors.password ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.password && formikProps.errors.password}</Text> : null}
                                <AppTextInput
                                    onBlur={formikProps.handleBlur('password')}
                                    onChangeText={formikProps.handleChange('password')}
                                    placeholder={'Password'}
                                    secureTextEntry={true}
                                />
                                {formikProps.touched.confirmPassword || formikProps.errors.confirmPassword ?
                                    <Text style={{ color: 'red', width: '80%' }}>{formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}</Text> : null}
                                <AppTextInput
                                    onBlur={formikProps.handleBlur('confirmPassword')}
                                    onChangeText={formikProps.handleChange('confirmPassword')}
                                    placeholder={'Confirm password'}
                                    secureTextEntry={true}
                                />
                            </View>

                            <AppBtn
                                txt={'Register'}
                                backgroundColor={'rgba(255, 255, 241, 0.9)'}
                                width={'90%'}
                                height={60}
                                borderRadius={10}
                                top={145}
                                fontWeight={'600'}
                                fontSize={20}
                                // onPress={() => navigation.navigate('Login')}
                                onPress={formikProps.handleSubmit}

                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        position: 'relative',
                                        top: 153,
                                    }}
                                >Already have an account? Login instead.</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </>
    )
}
