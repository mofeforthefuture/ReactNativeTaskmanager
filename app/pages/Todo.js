import React, { useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, TextInput, FlatList, } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Modal from 'react-native-modal';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TodosContainer from '../components/TodosContainer';


//username and password
let dataid = 0;
export const DATA =
    [
        // {
        //     id: dataid,
        //     text: 'First Item',
        // },


    ];
export default function Todo() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [results, setResult] = useState(DATA)
    const [text, setText] = useState('');

    const toggle = () => {
        if (!isModalVisible) {
            setModalVisible(true);
        } else {
            setModalVisible(false)
        }
    };
    const handleDelete = (item) => {
        let itemIndex = item.id - 1;
        console.log(results[itemIndex]);
        // const newArr = results.splice(itemIndex, 1);
        // setResult(newArr)
    }
    const handleSubmit = () => {
        setModalVisible(false);
        if (text.length >= 1) {
            results.push({ id: results.length + 1, text: text });
            console.log(results);
        }
        setText('')

    }


    const renderItem = ({ item }) => (
        <TodosContainer text={item.text} isComplete={item.isCompleted} deleted={() => handleDelete(item)} />
    );
    for (let i = 0; i < results.length; i++) {
        results[i].id = i + 1;
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'rgba(34, 31, 96, 1)' }}>
                <SafeAreaView style={{ marginBottom: 20 }}></SafeAreaView>

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
                    <FontAwesomeIcon icon={faPlus} size={30} color={'#fff'} />

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
                                color: '#fff',
                                fontWeight: '100',
                                fontSize: 30,
                                position: 'relative',
                                top: 60
                            }}>No todos yet😀</Text>

                            <Text style={{
                                color: '#fff',
                                fontWeight: '100',
                                fontSize: 30,
                                position: 'relative',
                                top: 60
                            }}>Add a new todo👍</Text>
                        </View>
                    }
                </View>
            </View>
        </>

    )
}
