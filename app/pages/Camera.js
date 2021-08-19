import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { COLORS } from '../constants/themes'
const hr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,]
const mins = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59,]
const m = ["AM", "PM"]

export default function Camera() {
    const [hour, setHour] = useState("00")
    const [hour12, setHour12] = useState("00")
    const [hour24, setHour24] = useState("00")
    const [min, setMin] = useState("00")
    const [ampm, setAMPM] = useState("AM")
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDay()
    const presentHour = new Date().getHours()
    const presentMin = new Date().getMinutes()
    const [checked, setChecked] = useState('00')

    useEffect(() => {
        if (presentHour > 12) {
            setChecked(presentHour - 12)
            setAMPM('PM')
        } else {
            setChecked(presentHour)
        }
    }, [])
    useEffect(() => {
        if (ampm === "AM") {
            setHour12('');
            setHour24("00");
            const d = new Date(year, month, day, hour24, min);
            console.log(d.getTime())
        } else if (ampm === "PM") {
            setHour24("");
            setHour12(hour + 12);
            const d = new Date(year, month, day, hour12, min);
            console.log(d.getTime())
        }

    }, [hour, min, ampm])

    return (
        <>
            <SafeAreaView></SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.tabBlack }}>
                <Text>camera</Text>
                <View style={{ width: '90%', height: 40, borderColor: '#000', borderWidth: 2, flexDirection: 'row' }}>
                    <SelectDropdown
                        data={hr}
                        defaultButtonText={checked}
                        onSelect={(selectedItem, index) => {
                            setHour(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={{ width: 60, height: 30, backgroundColor: COLORS.input }}
                    />
                    <SelectDropdown
                        data={mins}
                        defaultValue={presentMin}
                        onSelect={(selectedItem, index) => {
                            setMin(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={{ width: 60, height: 30, backgroundColor: COLORS.input }}
                    />
                    <SelectDropdown
                        data={m}
                        defaultValue={ampm}
                        onSelect={(selectedItem, index) => {
                            setAMPM(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={{ width: 60, height: 30, backgroundColor: COLORS.input }}
                    />
                </View>
            </View>
        </>
    )
}
