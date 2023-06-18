import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../app/guest/SignIn';
import SignUp from '../app/guest/SignUp';

export type GuestStackParamList = {
  SignIn: undefined;
  SignUp: {
    name: string;
  };
};

const Stack = createNativeStackNavigator();

export default function GuestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: '회원가입'}}
      />
    </Stack.Navigator>
  );
}
