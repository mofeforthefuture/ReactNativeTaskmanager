import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faTruck } from '@fortawesome/free-solid-svg-icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { COLORS, } from '../constants/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function User({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [userSession, setUserdata] = useState('')
    useEffect(() => {
        getData();
        // clearDataFromStorage()
    }, [])

    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem("userDetails");
            if (data !== null) {
                console.log('... data from storage', JSON.parse(data));
                const session = JSON.parse(data)
                setUserdata(session)
            } else {
                console.log('no data from storage...null');
            }
        } catch (error) {
            console.log('...Error fetching data from storage', error);
        }
    }

    const clearDataFromStorage = async () => {
        AsyncStorage.clear();
    }

    let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
        noData: true,
        mediaType: 'photo',
        storageOptions: {
            skipBackup: true
        }
    };
    const mofe = require('../assets/user.png');
    let [sourceImg, setSource] = useState(require('../assets/user.png'))
    return (
        <>
            <View style={{
                flex: 1,
            }}>

                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.purple
                }}>

                    <Modal isVisible={isModalVisible} style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{
                            width: 50,
                            height: 50,
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <Image source={mofe} style={{
                            height: '50%',
                            width: '100%',
                            position: 'relative',
                        }} />
                    </Modal>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        height: 200,
                        width: 200,
                        borderRadius: 100,
                        position: 'relative',
                        bottom: 80,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={sourceImg} style={{
                                height: 190,
                                width: 190,
                                borderRadius: 95,
                                position: 'relative',

                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => launchImageLibrary(options, response => {
                                if (response.didCancel) {
                                    console.log('User cancelled photo picker');
                                    console.log(response);
                                    alert('You did not select any image');
                                } else if (response.error) {
                                    console.log(response);

                                    console.log('ImagePicker Error: ', response.error);
                                } else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                    console.log(response);

                                } else {
                                    let source = { uri: response.uri };
                                }
                            })}
                            style={{}}>
                            <FontAwesomeIcon icon={faCamera} size={22} color={'#000'} />
                        </TouchableOpacity>

                    </View>
                    <Text style={{
                        color: 'rgba(149, 155, 167, 0.8)',
                        fontWeight: '600',
                        fontSize: 25,
                        position: 'relative',
                        bottom: 60
                    }}>{userSession && userSession.Name}</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Welcome')}
                        style={{
                            backgroundColor: COLORS.purple,
                            width: 120,
                            height: 40,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                fontWeight: '600',
                                fontSize: 20,
                                position: 'relative',
                                color: COLORS.white
                            }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}
