import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, } from 'react-native'
import Appline from '../components/Appline'


const Data = [
    {
        name: 'Gail Agbana',
        message: 'Hey wassup'
    },
    {
        name: 'Gail Agbana',
        message: 'Please gerrout'
    },
    {
        name: 'Gail Agbana',
        message: 'gerrout'
    },
    {
        name: 'Gail Agbana',
        message: 'gerrout'
    }
]
const Chat = []


export default function UsersChatList({ navigation }) {
    const [chat, setChat] = useState(Chat)
    const renderItem = ({ item }) => (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('Dm')}
                style={{
                    width: '100%',
                    height: 40,
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 10,
                }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#000',
                    marginLeft: 10,
                    marginRight: 10,
                }}>

                </TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{
                        fontStyle: 'italic',
                        fontSize: 17,
                        fontWeight: '600',
                    }}>{item.name}</Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '400',
                        color: 'rgba(154, 154, 145, 1)'
                    }}>{item.message}</Text>
                </View>
            </TouchableOpacity>
            <Appline />
        </>
    );

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <SafeAreaView></SafeAreaView>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontStyle: 'italic',
                    fontSize: 20,
                    fontWeight: '600',
                }}>Chat</Text>
            </View>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
