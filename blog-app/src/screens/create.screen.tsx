import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Context, IContext } from '../context/blogpost.context';
import { BlogPostForm } from '../components/blogpost-form.component';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Create'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const CreateScreen: React.FC<Props> = ({ navigation, route }) => {
  const { addBlogPost } = useContext(Context) as IContext;

  return (
    <View>
      <BlogPostForm
        onSubmit={(newBlogPost) => {
          addBlogPost(newBlogPost);
          navigation.navigate('Index');
        }}
        initialBlogPost={{ title: '', content: '' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
