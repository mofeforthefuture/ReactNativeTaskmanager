import React from 'react'
import { COLORS } from '../constants/themes.js'
import Icon from 'react-native-ionicons';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import dp from '../assets/Dp.jpeg'

// import Icon from 'react-native-ionicons'

import {
    faArchive,
    faCheck,
    faCheckDouble,
    faEdit,
    faSearch,
    faStickyNote,
    faThumbtack,
    faVolumeOff,
} from '@fortawesome/free-solid-svg-icons'

export function Chat({ delivered, muted, newChat, pinned, read, sent, sticker }) {
    return (
        <>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.tabBlack,
                    flexDirection: 'row',
                    height: 60,
                    width: '100%',
                }}>
                <TouchableOpacity
                    style={{
                        borderRadius: 28,
                        height: 55,
                        marginLeft: 10,
                        marginTop: 3,
                        width: 55,
                    }}>
                    <Image source={dp} style={{ width: 55, height: 55, borderRadius: 28, }} />
                </TouchableOpacity>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 12
                        }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontWeight: '700',
                                fontSize: 16,
                                marginLeft: '16%'
                            }}>Chat title</Text>
                        <Text
                            style={{
                                color: newChat ? COLORS.blue : COLORS.grey,
                                position: 'absolute',
                                left: sticker ? '225%' : '170%'
                            }}>06:11</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {sent ?
                            <FontAwesomeIcon
                                icon={delivered ? faCheckDouble : faCheck}
                                size={10} color={read ? COLORS.blue : COLORS.grey}
                                style={{ marginLeft: '6%' }} /> :
                            <View style={{ marginLeft: '9%' }}></View>}
                        {sticker ?
                            <>
                                <FontAwesomeIcon
                                    icon={faStickyNote}
                                    size={14}
                                    color={COLORS.grey}
                                    style={{ marginLeft: '8%' }} />
                                <Text style={{ color: COLORS.grey }}>{sticker}</Text>
                            </>
                            :
                            <Text
                                style={{
                                    color: COLORS.grey,
                                    fontWeight: '400',
                                    fontSize: 16,
                                    marginLeft: '2%'
                                }}>Send your Aza boss</Text>
                        }
                        <View
                            style={{
                                color: COLORS.grey,
                                position: 'absolute',
                                left: sticker ? '230%' : '170%',
                                flexDirection: 'row'
                            }}>
                            {muted ? <FontAwesomeIcon icon={faVolumeOff} size={14} color={COLORS.grey} /> : <></>}
                            {pinned ? <FontAwesomeIcon icon={faThumbtack} size={14} color={COLORS.grey} /> : <></>}
                            {newChat ? <View style={{ height: 16, width: 16, backgroundColor: COLORS.blue, borderRadius: 8, alignItems: 'center', }}>
                                <Text style={{ fontWeight: '600' }}>
                                    {newChat}
                                </Text>
                            </View> : <View></View>}
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <View
                style={{
                    backgroundColor: COLORS.input,
                    height: 0.5,
                    width: '81%',
                    alignSelf: 'flex-end',
                    marginTop: 10
                }}></View>

        </>
    )
}

export default function Chats() {
    return (
        <>
            <SafeAreaView
                style={{
                    backgroundColor: COLORS.tabBlack,
                    height: '10%',
                    alignItems: 'baseline'
                }}>
                <View
                    style={{
                        height: '30%'
                    }}></View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity style={{ marginLeft: '2%' }}>
                        <Text style={{ color: COLORS.blue, fontSize: 21 }}>Edit</Text>
                    </TouchableOpacity>
                    {/* <Icon name="add" />r */}
                    <TouchableOpacity style={{ position: 'absolute', left: '90%' }}>
                        <FontAwesomeIcon icon={faEdit} size={20} color={COLORS.blue} />

                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.tabBlack }}>
                <View style={{
                    flex: 1, backgroundColor: COLORS.tabBlack
                }}>
                    <View style={{
                        height: '100%',
                        width: '100%'
                    }}>
                        <View style={{ marginBottom: 10, }}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontSize: 40,
                                    fontWeight: '700',
                                    marginLeft: '3%'
                                }}>Chats</Text>
                        </View>
                        <View>
                            <View
                                style={{
                                    marginLeft: '3%',
                                    marginRight: '3%',
                                    height: 30,
                                    backgroundColor: COLORS.input,
                                    borderRadius: 10,
                                    paddingLeft: 12,
                                    flexDirection: 'row',
                                    marginBottom: 30,
                                }}>
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    size={16}
                                    color={COLORS.grey}
                                    style={{
                                        marginTop: 6,
                                    }} />
                                <TextInput
                                    placeholder={'Search'}
                                    style={{
                                        padding: 5,
                                        color: COLORS.grey
                                    }} />

                            </View>
                            <View style={{ backgroundColor: COLORS.tabBlack, height: 50, alignItems: 'baseline' }}>
                                <View style={{ flexDirection: 'row', width: '100%', marginBottom: 10, }}>
                                    <TouchableOpacity style={{ marginLeft: '2%' }}>
                                        <Text style={{ color: COLORS.blue, fontSize: 21 }}>Broadcast Lists</Text>
                                    </TouchableOpacity>
                                    {/* <Icon name="add" />r */}
                                    <TouchableOpacity style={{ position: 'absolute', left: '75%' }}>
                                        <Text style={{ color: COLORS.blue, fontSize: 21 }}>New Group</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ backgroundColor: COLORS.input, height: 0.3, width: '100%' }}></View>
                            </View>

                            <View style={{
                                backgroundColor: COLORS.tabBlack,
                                height: 15, alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                                <FontAwesomeIcon icon={faArchive} size={15} color={COLORS.grey} style={{ marginLeft: '10%' }} />
                                <View>
                                    <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 16, marginLeft: '16%' }}>Archived</Text>
                                </View>
                                <Text style={{ color: COLORS.blue, fontSize: 21, marginLeft: '48%' }}>1</Text>
                            </View>
                            <View style={{ backgroundColor: COLORS.input, height: 0.3, width: '81%', alignSelf: 'flex-end', marginTop: 10 }}></View>
                            <Chat
                                read={true}
                                delivered={true}
                                sent={true}
                                pinned={true}
                            />
                            <Chat
                                delivered={true}
                                sent={true}
                                muted={true}
                            />
                            <Chat
                                newChat={1}
                                sticker={'Sticker'}
                            />
                            <Icon name="camera" size={40} color="red" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
