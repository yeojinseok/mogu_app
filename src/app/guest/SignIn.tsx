import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {GuestStackParamList} from '../../navigation/GuestStack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type SignInScreenProps = StackNavigationProp<GuestStackParamList, 'SignIn'>;

export default function SignIn() {
  const navigation = useNavigation<SignInScreenProps>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>로그인 페이지 입니당.</Text>
      <Button
        title="asdf"
        onPress={() => navigation.navigate('SignUp', {name: 'asdffsad'})}
      />
    </SafeAreaView>
  );
}
