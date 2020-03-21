import MainPage from '../screens/MainPage';
import MainSettings from '../screens/MainSettings';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='MainPage'>
      <Stack.Navigator>
        <Stack.Screen name='MainPage' component={MainPage} options={{ title: 'Language Page' }} />
        <Stack.Screen
 name='MainSettings' component={MainSettings} options={{ title: 'Language Settings' }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}