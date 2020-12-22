import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Context } from '../context/blogpost.context';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((value) => value.id === route.params.blogPostId);

  return (
    <View>
      <Text>Detail Screen for blogPost: {blogPost?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
