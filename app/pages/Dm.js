import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView, } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import ChatTxt from '../components/ChatTxt';
import { COLORS, } from '../constants/themes';
import ActivityIndicator from '../components/ActivityIndicator';

export default function Dm() {
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);
    const [text, setText] = useState('');

    function handleSend() {
        if (text.length >= 1) {
            Data.push(text);
            console.log(Data)
            setText('')
        }
    }

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => console.log(data[1].title))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    const renderItem = ({ item }) => (
        <View>
            {/* 
            <View style={{
                backgroundColor: "#0078fe",
                padding: 10,
                marginLeft: '45%',
                borderRadius: 5,
                marginTop: 5,
                marginRight: "5%",
                maxWidth: '50%',
                alignSelf: 'flex-end',

                borderRadius: 20,
            }}>
                <Text style={{
                }}>
                    {item}
                </Text>
            </View> */}
            <ChatTxt texts={item} />
        </View>
    );

    return (
        <>
            <View style={{ flex: 1, }}>
                <ActivityIndicator
                    visible={loading}
                />
                <View style={{
                    height: '93%',
                    backgroundColor: 'white)'

                }}>
                    <SafeAreaView></SafeAreaView>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View
                    style={{
                        height: '7%',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                    <View style={{
                        width: '87%',
                        height: '76%',
                        borderRadius: 15,
                        justifyContent: 'center',
                        borderColor: '#ccc',
                        borderStyle: 'solid',
                        borderWidth: 0.5,
                        paddingLeft: 5,
                        position: 'relative'
                    }}>
                        <TextInput placeholder={'text....'} style={{ width: '100%' }} value={text} onChangeText={setText} />
                    </View>
                    <TouchableOpacity
                        onPress={handleSend}
                        style={{
                            width: '10%',
                            backgroundColor: 'rgba(110, 130, 232, 1)',
                            height: '74%',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '1%'
                        }}>
                        <FontAwesomeIcon icon={faCaretRight} size={30} color={COLORS.white} />

                    </TouchableOpacity>
                </View>
                {/* <Image source={require(image)} style={{ height: '100%' }} />
            </View>
            <View style={{
                flex: 1, backgroundColor: COLORS.purple,
                alignItems: 'center',

            }}>
                <Text style={{
                    fontSize: 28,
                    color: COLORS.white,
                    position: 'relative',
                    bottom: 100
                }}>Good morning Mofe!!</Text> */}

            </View>
        </>

    )
}
