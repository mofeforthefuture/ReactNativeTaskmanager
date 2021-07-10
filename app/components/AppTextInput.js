import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function AppTextInput({ placeholder, top, onPress }) {
    return (
        <View
            onPress={onPress}
            style={{
                backgroundColor: 'rgba(255, 255, 241, 0.6)',
                width: '90%',
                height: 60,
                borderRadius: 10,
                marginBottom: 20,
                top: top,
                justifyContent: 'center',
                paddingLeft: 15
            }}>
            <TextInput
                placeholder={placeholder}
                fontSize={18}
            />
        </View>
    )
}
