import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export default function Home() {
    let image = '../assets/morning.jpeg';
    // var d = new Date();
    // var hh = d.getHours();
    // function greetDisplay() {

    //     var displayText = 'Good morning'
    //     if (hh >= 0 && hh <= 12) {
    //         let image = '../assets/morning.jpeg';
    //         let displayText = 'Good morning'
    //     } else if (hh >= 12 && hh <= 16) {
    //         let image = '../assets/afternoon.jpeg';
    //         let displayText = 'Good afternoon'
    //     } else {
    //         let image = '../assets/evening.jpeg';
    //         let displayText = 'Good evening'
    //     }
    //     const arr = [image, displayText]
    //     return arr;
    // }
    // setInterval(greetDisplay, 1000);

    return (
        <>
            <View style={{ flex: 1 }}>
                <Image source={require(image)} style={{ height: '100%' }} />
            </View>
            <View style={{
                flex: 1, backgroundColor: 'rgba(120, 160, 241, 0.4)',
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
