import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, TextInput, FlatList, } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Modal from 'react-native-modal';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TodosContainer from '../components/TodosContainer';
import { COLORS, } from '../constants/themes';
import LottieView from 'lottie-react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notodo from '../components/noTodo';



//username and password
export const DATA =
    [
        // {
        //     userId: ID,
        //     task: text,
        // },


    ];
export default function Todo() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [results, setResult] = useState([])
    const [text, setText] = useState('');
    const [ID, setID] = useState('')
    const [loading, isloading] = useState(false)
    const value = { userId: ID, task: text }

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        try {
            AsyncStorage.getItem('userDetails')
                .then(res => {
                    if (res != null) {
                        const ID = JSON.parse(res).ID
                        setID(ID)
                        getTodos(ID)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    const getTodos = async (userID) => {
        isloading(true)
        await fetch(`https://enigmatic-plains-12808.herokuapp.com/api/todo/${userID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setResult(data)
            })
        isloading(false)
    }
    const toggle = () => {
        if (!isModalVisible) {
            setModalVisible(true);
        } else {
            setModalVisible(false)
        }
    };

    // const handleSubmit = () => {
    //     setModalVisible(false);
    //     if (text.length >= 1) {
    //         results.push({ id: results.length + 1, text: text });
    //         console.log(results);
    //     }
    //     setText('')

    // }
    const handleSubmit = async () => {
        if (text.length > 0) {
            await fetch('https://enigmatic-plains-12808.herokuapp.com/api/todo', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            })
            getTodos(ID)
            setModalVisible(false)
            setText('')
        } else {
            setModalVisible(false)
        }

    }
    const handleDelete = async (item) => {
        console.log(item)
        const response = await fetch(`https://enigmatic-plains-12808.herokuapp.com/api/todo/${item}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });

        const data = await response.text();

        // now do whatever you want with the data  
        console.log(data);
        getTodos(ID)
    }


    const renderItem = ({ item, index }) => (
        <TodosContainer keys={item.id} text={item.Info} isComplete={item.isCompleted} deleted={() => handleDelete(item.Id)} />
    );
    for (let i = 0; i < results.length; i++) {
        results[i].id = i + 1;
    }
    // const loading = true


    return (
        <>
            <View style={{ flex: 1, backgroundColor: COLORS.purple }}>
                <SafeAreaView style={{ marginBottom: 20 }}></SafeAreaView>
                <ActivityIndicator visible={loading} />
                <Modal isVisible={isModalVisible}>
                    <View style={{ backgroundColor: 'white', width: '100%', height: '30%', alignItems: 'center', }}>
                        <View style={{
                            width: '90%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 10,
                            justifyContent: 'center',
                            paddingLeft: 10,
                            borderRadius: 15,
                            marginBottom: 10,
                        }}>
                            <TextInput placeholder={'Add a new todo'} value={text} onChangeText={setText} />
                        </View>
                        <TouchableOpacity onPress={handleSubmit} style={{
                            width: 80,
                            height: 30,
                            backgroundColor: 'rgba(0, 191, 255, 1)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7,

                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                position: 'relative',
                            }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>


                <TouchableOpacity onPress={toggle} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '85%',
                    left: '80%'


                }}>
                    <FontAwesomeIcon icon={faPlus} size={30} color={COLORS.white} />

                </TouchableOpacity>
                <View style={{ height: '74%' }}>
                    {results.length ?
                        <FlatList
                            data={results}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        /> :
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{
                                color: COLORS.white,
                                fontWeight: '100',
                                fontSize: 30,
                                position: 'relative',
                                top: 60
                            }}>No todos yet🔥🚀📚</Text>

                            <Text style={{
                                color: COLORS.white,
                                fontWeight: '100',
                                fontSize: 30,
                                position: 'relative',
                                top: 60,
                                marginBottom: 50,
                            }}>Add a new todo👍</Text>
                            <Notodo />

                        </View>
                    }
                </View>
            </View>
        </>

    )
}
