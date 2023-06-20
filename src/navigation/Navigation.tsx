import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GuestStack from './GuestStack';
import {useAuthStorage} from '../store/zustore/AuthStorage';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const isLogin = useAuthStorage(v => v.isLogin);
  return (
    <NavigationContainer>
      {isLogin ? (
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
