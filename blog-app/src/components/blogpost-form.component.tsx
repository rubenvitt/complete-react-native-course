import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BlogPost } from '../context/blogpost.context';

export const BlogPostForm: React.FC<{
  onSubmit: (blogPost: BlogPost) => void;
  initialBlogPost: BlogPost;
}> = ({ onSubmit, initialBlogPost }) => {
  const [content, setContent] = useState(initialBlogPost?.content ?? '');
  const [title, setTitle] = useState(initialBlogPost?.title ?? '');

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput style={styles.inputStyle} value={title} onChangeText={setTitle} />
      <Text style={styles.labelStyle}>Enter Content:</Text>
      <TextInput style={styles.inputStyle} value={content} onChangeText={setContent} />
      <Button
        title={initialBlogPost.id ? 'Update BlogPost' : 'Create BlogPost'}
        onPress={() => {
          onSubmit({
            ...initialBlogPost,
            content: content,
            title: title,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'rgb(33,33,33)',
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
