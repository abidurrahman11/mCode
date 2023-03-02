import { StyleSheet, Text, View, TouchableHighlight, Linking } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function About() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={styles.title}>Developer Info</Text>
            <Text style={styles.name}>Abidur Rahman</Text>
            <View style={styles.social}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#DDDDDD"
                    onPress={async() => await Linking.openURL('https://github.com/abidurrahman11')}>
                    <MaterialCommunityIcons style={styles.link} name="github" size={26} color="gray" />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#DDDDDD"
                    onPress={async() => await Linking.openURL('https://abidurrahman11.github.io')}>
                    <MaterialCommunityIcons style={styles.link} name="web" size={26} color="gray" />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#DDDDDD"
                    onPress={async() => await Linking.openURL('mailto:abidurofficial@gmail.com')}>
                    <MaterialCommunityIcons style={styles.link} name="email" size={26} color="gray" />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#DDDDDD"
                    onPress={async() => await Linking.openURL('https://instagram.com/abidurrahman11')}>
                    <MaterialCommunityIcons style={styles.link} name="instagram" size={26} color="gray" />
                </TouchableHighlight>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'tomato',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color: 'gray',
    },
    social: {
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        padding: 8
    }
})