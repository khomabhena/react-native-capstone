import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Little Lemon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
    }
})

export default SplashScreen
