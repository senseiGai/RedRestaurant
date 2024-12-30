import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import MenuScreen from '../screens/menu-screen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
}