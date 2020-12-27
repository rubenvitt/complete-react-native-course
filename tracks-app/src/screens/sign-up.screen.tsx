import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/spacer.component';
import { useAuthenticationMethods, useAuthenticationStore } from '../hooks/login.hook';

type DetailScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Signin'>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { authenticate, error } = useAuthenticationStore();
  const { login, signup } = useAuthenticationMethods();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        value={email}
        onChangeText={setEmail}
        label={'E-Mail'}
        textContentType={'emailAddress'}
        autoCompleteType={'email'}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Input
        value={password}
        textContentType={'newPassword'}
        secureTextEntry
        onChangeText={setPassword}
        label={'Password'}
      />
      {error && (
        <Spacer>
          <Text style={styles.errorText}>{error.message}</Text>
        </Spacer>
      )}
      <Spacer>
        <Button
          title={'Sign up'}
          onPress={() => {
            authenticate(signup, email, password);
          }}
        />
      </Spacer>
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
  errorText: {
    color: 'rgb(200,0,0)',
    marginRight: 15,
  },
});

export default SignUpScreen;
