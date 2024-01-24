import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/Home';

const Stack = createNativeStackNavigator();

function Router() {
  return (
   <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
    </Stack.Navigator> 
  )
}

export default Router