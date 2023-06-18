import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GuestStack from './GuestStack';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      {false ? (
        // <Tab.Navigator>
        //   <Tab.Screen
        //     name=""
        //   />
        // </Tab.Navigator>
        <></>
      ) : (
        <GuestStack />
      )}
    </NavigationContainer>
  );
}
