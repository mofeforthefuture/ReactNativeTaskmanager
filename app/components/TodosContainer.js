
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DATA from '../pages/Todo'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default function TodosContainer({ text, index, deleted }) {
    const [complete, setComplete] = useState(false);
    const handleComplete = () => {
        if (!complete) {
            setComplete(true)
        } else {
            setComplete(false)
        }
    }
    const handleDelete = () => {
        console.log(DATA, 11);
        DATA.splice(dataid - 1, 1)
        console.log('hey', dataid);
    }
    return (
        <>
            <View style={{
                width: '90%',
                height: 60,
                backgroundColor: 'rgba(245, 255, 255, 0.5)',
                marginLeft: '5%',
                borderRadius: 10,
                marginBottom: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                ...styles.shadow

            }}>
                <View
                    style={{
                        width: '80%',
                        height: '100%',
                        justifyContent: 'center',
                        paddingLeft: 10,

                    }}
                >
                    <Text style={{ color: 'rgba(10, 22, 83, 1)', fontWeight: '600', textDecorationLine: complete ? 'line-through' : 'none' }}>{index}{text}</Text>
                </View>
                <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 5, }}>
                    <FontAwesomeIcon icon={faCheckCircle} size={25} color='green' style={{ marginTop: 17, }} onPress={handleComplete} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faTrashAlt} size={25} color='red' style={{ marginTop: 17, }} onPress={deleted} />
                </TouchableOpacity>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.5,
        elevation: 5,

    }
})