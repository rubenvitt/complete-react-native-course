import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Context, IContext } from '../context/blogpost.context';
import { BlogPostForm } from '../components/blogpost-form.component';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Edit'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Edit'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const EditScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state, updateBlogPost } = useContext(Context) as IContext;
  const blogPost = state.find((value) => value.id === route.params.blogPostId);

  if (!blogPost) {
    navigation.navigate('Index');
    return null;
  }

  return (
    <View>
      <BlogPostForm
        onSubmit={(updatedBlogPost) => {
          updateBlogPost(updatedBlogPost);
          navigation.goBack();
        }}
        initialBlogPost={blogPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
