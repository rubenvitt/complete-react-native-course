import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthenticationMethods, useAuthenticationStore } from '../hooks/login.hook';
import { Button } from 'react-native-elements';

const AccountScreen = () => {
  const { authenticate } = useAuthenticationStore();
  const { logout } = useAuthenticationMethods();

  return (
    <View>
      <Text>Account Screen</Text>
      <Button title={'Logout'} onPress={() => authenticate(logout)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
