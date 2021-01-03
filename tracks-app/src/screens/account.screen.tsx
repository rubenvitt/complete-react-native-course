import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthenticationMethods, useAuthenticationStore } from '../hooks/login.hooks';
import { Button } from 'react-native-elements';
import Spacer from '../components/spacer.component';
import { LoginStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

const AccountScreen = () => {
  const { authenticate } = useAuthenticationStore();
  const { logout } = useAuthenticationMethods();
  useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>Account Screen</Text>
      <Spacer>
        <Button
          title={'Logout'}
          onPress={() => {
            authenticate(logout);
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;
