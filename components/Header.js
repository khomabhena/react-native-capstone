import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../img/Logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 300,
        resizeMode: 'contain'
    }
})

export default Header
