import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {GuestStackParamList} from '../../navigation/GuestStack';

type SignInScreenProps = StackNavigationProp<GuestStackParamList, 'SignIn'>;

export default function SignIn() {
  const navigation = useNavigation<SignInScreenProps>();

  return (
    <View>
      <Text>로그인 페이지 입니당.</Text>
      <Button
        title="asdf"
        onPress={() => navigation.navigate('SignUp', {name: ''})}
      />
    </View>
  );
}
