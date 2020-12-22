import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Context } from '../context/blogpost.context';
import { MaterialIcons } from '@expo/vector-icons';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((value) => value.id === route.params.blogPostId);

  navigation.setOptions({
    title: blogPost?.title,
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edit', {
              blogPostId: blogPost?.id,
            });
          }}
        >
          <MaterialIcons style={styles.addIcon} name="create" size={30} color="black" />
        </TouchableOpacity>
      );
    },
  });

  return (
    <View>
      <Text>{blogPost?.title}</Text>
      <Text>{blogPost?.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addIcon: {
    marginRight: 10,
  },
});

export default DetailScreen;
