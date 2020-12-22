import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Context, IContext } from '../context/blogpost.context';
import { BlogPostForm } from '../components/blogpost-form.component';
import { useMutation, useQueryClient } from 'react-query';
import { createBlogPost, removeBlogPost } from '../api/blogpost.api';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Create'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const CreateScreen: React.FC<Props> = ({ navigation, route }) => {
  const { addBlogPost, state } = useContext(Context) as IContext;

  const queryClient = useQueryClient();
  const { mutate } = useMutation('blogposts', createBlogPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('blogPosts');
    },
  });

  return (
    <View>
      <BlogPostForm
        onSubmit={(newBlogPost) => {
          mutate(newBlogPost);
          navigation.navigate('Index');
        }}
        initialBlogPost={{ title: '', content: '' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
