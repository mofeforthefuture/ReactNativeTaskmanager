// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
// import AppBtn from '../components/AppBtn';
// import AppTextInput from '../components/AppTextInput';
// import { COLORS, } from '../constants/themes';
// import { Formik } from 'formik'
// import * as yup from 'yup'



// // componentDidMount() {
// //     // Simple POST request with a JSON body using fetch
// //     const requestOptions = {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ title: 'React POST Request Example' })
// //     };
// //     fetch('https://reqres.in/api/posts', requestOptions)
// //         .then(response => response.json())
// //         .then(data => this.setState({ postId: data.id }));
// // }

// // const authSchema = yup.object().shape({

// //     firstName: yup
// //         .string()
// //         .label('firstName')
// //         .required('firstname is required')
// //         .min(5, 'firstname Cannot be less than 5'),
// //     lastName: yup
// //         .string()
// //         .label('lastName')
// //         .required('lastname is required')
// //         .min(5, 'Email Cannot be less than 5'),
// //     userName: yup
// //         .string()
// //         .label('username')
// //         .required('Email is required')
// //         .min(5, 'Email Cannot be less than 5'),

// //     password: yup
// //         .string()
// //         .min(5, 'firstname Cannot be less than 5')
// //         .required('Password is required'),

// // })

// export default function SignUp({ navigation }) {
//     const signUp = async () => {
//     }

//     return (
//         <>
//             {/* <Formik
//                 initialValues={{ firstName: '', lastName: '', userName: '', password: '', confirmPassword: '' }}
//                 onSubmit={(values, actions) => {
//                     alert(JSON.stringify(values))
//                     setTimeout(() => {
//                         actions.setSubmitting(false)
//                     }, 2000)
//                 }}
//                 validationSchema={authSchema}
//                 >
//                 {formikProps => (
//                     <> */}
//             <View style={{
//                 flex: 1,
//                 backgroundColor: COLORS.purple,
//                 alignItems: 'center'
//             }}>
//                 <SafeAreaView></SafeAreaView>
//                 <Text style={{
//                     color: COLORS.white,
//                     fontWeight: '600',
//                     fontSize: 40,
//                     position: 'relative',
//                     top: 60
//                 }}>
//                     SignUp
//                 </Text>
//                 <View
//                     style={{
//                         width: '100%',
//                         alignItems: 'center',
//                         position: 'relative',
//                         top: 100
//                     }}
//                 >
//                     <AppTextInput
//                         placeholder={'First name'}
//                         onChangeText={formikProps.handleChange('firstname')}
//                         onBlur={formikProps.handleBlur('firstname')}
//                     />
//                     <Text style={{ color: 'white', }}>{formikProps.touched.firstName && formikProps.errors.firstName}</Text>
//                     <AppTextInput
//                         placeholder={'Last name'}
//                     />
//                     <AppTextInput
//                         placeholder={'Username'}
//                     />
//                     <AppTextInput
//                         placeholder={'Password'}
//                     />
//                     <AppTextInput
//                         placeholder={'Confirm password'}
//                     />
//                 </View>

//                 <AppBtn
//                     txt={'Register'}
//                     backgroundColor={'rgba(255, 255, 241, 0.9)'}
//                     width={'90%'}
//                     height={60}
//                     borderRadius={10}
//                     top={145}
//                     fontWeight={'600'}
//                     fontSize={20}
//                     onPress={() => navigation.navigate('Login')}

//                 />
//                 <TouchableOpacity onPress={() => formikProps.handleSubmit}>
//                     <Text
//                         style={{
//                             color: COLORS.white,
//                             position: 'relative',
//                             top: 153,
//                         }}
//                     >Already have an account? Login instead.</Text>
//                 </TouchableOpacity>
//             </View>
//         </>
//     )
// }
// //             </Formik>
// //         </>
// //     )
// // }
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import AppBtn from '../components/AppBtn';
import AppTextInput from '../components/AppTextInput';
import { COLORS, } from '../constants/themes';
import { Formik } from 'formik'
import * as yup from 'yup'




export default function SignUp({ navigation }) {
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        name: '',
        Password: '',
        confirmPassword: ''
    })
    const signUp = async () => {

        console.log('value', value)
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
            })

    }
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
                    <AppTextInput
                        placeholder={'First name'}
                        onChangeText={(text) => setValue({ ...value, firstName: text })}
                    />
                    <AppTextInput
                        onChangeText={(text) => setValue({ ...value, lastName: text })}
                        placeholder={'Last name'}
                    />
                    <AppTextInput
                        onChangeText={(text) => setValue({ ...value, name: text })}
                        placeholder={'Username'}
                    />
                    <AppTextInput
                        onChangeText={(text) => setValue({ ...value, password: text })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <AppTextInput
                        onChangeText={(text) => setValue({ ...value, confirmPassword: text })}
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
                    onPress={signUp}

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
            </View>
        </>
    )
}
