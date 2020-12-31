import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input, Text } from 'react-native-elements';
import { useAuthenticationMethods, useAuthenticationStore } from '../hooks/login.hook';
import AuthenticationForm from '../components/authentication-form.component';

type DetailScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Signup'>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { signup } = useAuthenticationMethods();

  return (
    <View style={styles.container}>
      <AuthenticationForm authenticationMethod={signup} title={'Sign up for Tracker'} btnTitle={'Sign up'} />
      <Button
        type={'clear'}
        title={'Already a member? Sign in!'}
        onPress={() => {
          navigation.navigate('Signin');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignUpScreen;
