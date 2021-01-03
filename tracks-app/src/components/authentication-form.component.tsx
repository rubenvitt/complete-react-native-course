import React, { useEffect, useState } from 'react';
import Spacer from './spacer.component';
import { Button, Input, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { AuthenticationMethod, useAuthenticationStore } from '../hooks/login.hooks';
import { useIsFocused } from '@react-navigation/native';

type Props = {
  authenticationMethod: AuthenticationMethod;
  title: string;
  btnTitle: string;
};

const AuthenticationForm: React.FC<Props> = ({ authenticationMethod, title, btnTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, error, clearError } = useAuthenticationStore();
  const isFocused = useIsFocused();

  useEffect(clearError, [isFocused]);

  return (
    <View>
      <Spacer>
        <Text h3>{title}</Text>
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
          title={btnTitle}
          onPress={() => {
            authenticate(authenticationMethod, email, password);
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'rgb(200,0,0)',
    marginRight: 15,
  },
});

export default AuthenticationForm;
