import React from 'react';
import {GuestStackParamList} from '../../navigation/GuestStack';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';

type SignUpScreenRouteProp = RouteProp<GuestStackParamList, 'SignUp'>;

export default function SignUp() {
  const route = useRoute<SignUpScreenRouteProp>();

  const {name} = route.params;

  return <Text>{name}</Text>;
}
