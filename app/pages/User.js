import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'


export default function User({ navigation }) {
    return (
        <>
            <View style={{
                flex: 1,
            }}>

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(34, 31, 96, 1)'
                }}>

                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        height: 200,
                        width: 200,
                        borderRadius: 100,
                        position: 'relative',
                        bottom: 80,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Image source={require('../assets/user.png')} style={{
                            backgroundColor: '#000',
                            height: 190,
                            width: 190,
                            borderRadius: 95,
                            position: 'relative',

                        }} />
                        <TouchableOpacity style={{
                            position: 'absolute',
                            backgroundColor: '#ccc',
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 150,
                            left: 150,
                        }}>
                            <FontAwesomeIcon icon={faCamera} size={22} color={'#000'} />
                        </TouchableOpacity>

                    </View>
                    <Text style={{
                        color: 'rgba(149, 155, 167, 0.8)',
                        fontWeight: '600',
                        fontSize: 25,
                        position: 'relative',
                        bottom: 60
                    }}>Great Mofe</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgba(34, 31, 96, 1)',
                        width: 120,
                        height: 40,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text
                            onPress={() => navigation.navigate('Welcome')}
                            style={{
                                fontWeight: '600',
                                fontSize: 20,
                                position: 'relative',
                            }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}
