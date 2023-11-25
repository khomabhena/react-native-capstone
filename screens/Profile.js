import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import { TextInput } from 'react-native-paper'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Personal Information</Text>
      <Text style={styles.textAvatar}>Avatar</Text>
      
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.imageBackground}>
          <Text style={styles.imageText}>JD</Text>
        </ImageBackground>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonChange}>
            <Text style={styles.textChange}>Change</Text>
          </Pressable>
          <Pressable style={styles.buttonRemove}>
            <Text style={styles.textRemove}>Remove</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>First name</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.label}>Last name</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.label}>Phone number</Text>
        <TextInput style={styles.textInput}></TextInput>

        <Pressable style={styles.buttonLogout}>
          <Text style={styles.textLogout}>Log out</Text>
        </Pressable>

        <View style={styles.saveContainer}>
          <Pressable style={styles.buttonChange}>
            <Text style={styles.textChange}>Save changes</Text>
          </Pressable>
          <Pressable style={styles.buttonRemove}>
            <Text style={styles.textRemove}>Discard changes</Text>
          </Pressable>
        </View>
        
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 24
    },
    textHeading: {
      fontSize: 28,
      marginTop: 16,
      fontWeight: 'bold',
    },
    textAvatar: {
      fontSize: 16,
      marginTop: 24,
      fontWeight: 'regular',
    },
    imageContainer: {
      flex: 0.15,
      marginTop: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    },
    imageBackground: {
      backgroundColor: 'teal',
      height: 100,
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageText: {
      color: 'white',
      fontSize: 54,
      fontWeight: 'bold'
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 16,
      gap: 16,
    },
    
    buttonChange: {
      borderColor: 'teal',
      backgroundColor: 'teal',
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    textChange: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    buttonRemove: {
      borderColor: 'teal',
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    textRemove: {
      color: 'teal',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center'
    },
    form: {
      flex: 1,
    },
    label: {
      fontSize: 18,
      marginTop: 24,
      fontWeight: '600',
      color: 'grey'
    },
    textInput: {
      borderRadius: 8,
      borderColor: 'teal',
      borderWidth: 1,
      marginTop: 8,
      backgroundColor: 'transparent',
    },

    buttonLogout: {
      borderColor: 'teal',
      backgroundColor: 'teal',
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginTop: 24,
    },
    textLogout: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center'
    },

    saveContainer: {
      justifyContent: 'center',
      marginTop: 24,
      flexDirection: 'row-reverse',
      gap: 16,
    },
})
