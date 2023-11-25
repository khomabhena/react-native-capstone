import { Alert, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { validateEmail } from './utils';
import OnBoarding from './screens/OnBoarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator()
  const [loggedIn, setLoggedIn] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      (async () => {
        try {
          const state = await AsyncStorage.getItem('loggedIn')
          // const value = JSON.parse(state) === 'true'

          // setLoggedIn(value)
        } catch (error) {
          Alert.alert("Error: " + error.message)
        } finally {
          setIsLoading(false)
        }
      })()
  }, [])

  if (isLoading)
    return <SplashScreen />

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name='Profile' component={Profile} />
            </>
            ) : (
              <Stack.Screen name='Welcome' component={OnBoarding} />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
});
