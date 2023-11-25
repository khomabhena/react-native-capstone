import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { validateEmail } from '../utils'
import Button from '../components/Button'
import Header from '../components/Header'

const OnBoarding = () => {
    const [firstName, setName] = useState('')
    const [email, setEmail] = useState('')
    const isEmailValid = validateEmail(email)

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.formContainer}>
        
            <Text style={styles.title}>Let us get to know you</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setName}
                keyboardType="text"
                textContentType="emailAddress"
                placeholder={"Type your first name"}
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder={"Type your email"}
            />
            <Button onPress={() => { Alert.alert("Next!"); }} disabled={!isEmailValid}>Next</Button>
        </View>
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    title: {
        marginTop: 32,
        color: "#333333",
        textAlign: "center",
        fontSize: 32,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        marginTop: 32,
        color: "#333333",
        textAlign: "center",
        fontSize: 32,
    },
    logo: {
        height: 100,
        width: 300,
        resizeMode: "contain",
        marginBottom: 32,
    },
    input: {
        height: 40,
        marginVertical: 24,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "EDEFEE",
    },
})