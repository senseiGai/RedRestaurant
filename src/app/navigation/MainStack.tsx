import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import MenuScreen from '../screens/menu-screen';
import CartScreen from '../screens/cart-screen';
import ContactsScreen from '../screens/contacts-screen';
import ReserveScreen from '../screens/reserve-screen';
import ReserveSuccessScreen from '../screens/reserve-success-screen';
import EventsScreen from '../screens/events-screen';
import EventDetailsScreen from '../screens/event-details-screen';


export type EventType = {
  image: any;
  title: string;
  date: string;
  bluredImage: any;
  paragraph: string
}

export type MainStackParamList = {
  Menu: undefined;
  Cart: undefined;
  Contacts: undefined;
  Reserve: undefined;
  ReserveSuccess: undefined;
  Events: undefined;
  EventDetails: {
    event: EventType;
  };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

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
      <Stack.Screen
        name="Events"
        component={EventsScreen}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
      />
    </Stack.Navigator>
  );
}