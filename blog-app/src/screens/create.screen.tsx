import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Create'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const CreateScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
