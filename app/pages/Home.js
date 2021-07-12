import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';



export default function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/50')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    let image = '../assets/morning.jpeg';


    return (
        <>
            <View style={{ flex: 1 }}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                />
                <Image source={require(image)} style={{ height: '100%' }} />
            </View>
            <View style={{
                flex: 1, backgroundColor: 'rgba(34, 31, 96, 1)',
                alignItems: 'center',

            }}>
                <Text style={{
                    fontSize: 28,
                    color: '#fff',
                    position: 'relative',
                    bottom: 100
                }}>Good morning Mofe!!</Text>
                <Text style={{
                    fontSize: 28,
                    color: 'rgba(30, 59, 115, 0.8)',
                }}>6 more tasks to finish😀👍</Text>
                <Text style={{
                    fontSize: 28,
                    color: 'rgba(30, 59, 115, 0.8)',
                }}>congratulations on completing 5 tasks yesterday😀👍</Text>
            </View>
        </>

    )
}
