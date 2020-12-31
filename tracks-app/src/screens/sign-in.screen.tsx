import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginStackParamList } from '../../App';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { useAuthenticationMethods } from '../hooks/login.hook';
import AuthenticationForm from '../components/authentication-form.component';

type DetailScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Signin'>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useAuthenticationMethods();

  return (
    <View style={styles.container}>
      <AuthenticationForm authenticationMethod={login} title={'Sign In (Tracker)'} btnTitle={'Sign in'} />
      <Button
        type={'clear'}
        title={'Not a member? Sign up!'}
        onPress={() => {
          navigation.navigate('Signup');
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
