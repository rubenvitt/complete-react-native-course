import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LoginStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthenticationStore } from '../hooks/login.hooks';

type DetailScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Signin'>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

const LoadingScreen: React.FC<Props> = ({ navigation }) => {
  const { tryFindToken, token } = useAuthenticationStore();
  useEffect(() => {
    tryFindToken().then((result) => {
      !result && navigation.navigate('Signup');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
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

export default LoadingScreen;
