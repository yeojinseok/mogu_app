import React from 'react';
import {GuestStackParamList} from '../../navigation/GuestStack';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

type SignUpScreenRouteProp = RouteProp<GuestStackParamList, 'SignUp'>;

export default function SignUp() {
  const route = useRoute<SignUpScreenRouteProp>();

  const {name} = route.params;

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{name}</Text>
    </View>
  );
}
