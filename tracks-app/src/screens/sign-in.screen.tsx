import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../App';

type DetailScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Signin'>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>SignIn Screen</Text>

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

const styles = StyleSheet.create({});

export default SignInScreen;
