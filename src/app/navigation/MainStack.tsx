import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import MenuScreen from '../screens/menu-screen';
import CartScreen from '../screens/cart-screen';
import ContactsScreen from '../screens/contacts-screen';
import ReserveScreen from '../screens/reserve-screen';
import ReserveSuccessScreen from '../screens/reserve-success-screen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
      />
      <Stack.Screen
        name="Reserve"
        component={ReserveScreen}
      />
      <Stack.Screen
        name="ReserveSuccess"
        component={ReserveSuccessScreen}
      />
    </Stack.Navigator>
  );
}