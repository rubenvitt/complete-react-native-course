import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/blogpost.provider';

export const IndexScreen = () => {
  const { data: blogPosts, action } = useContext(BlogContext);

  return (
    <View>
      <Text>Index screen: {blogPosts.length} elements</Text>
      <Button
        title={'Add blogpost'}
        onPress={() => {
          action({
            payload: { title: 'Testpost #' + blogPosts.length, id: String(blogPosts.length) },
            type: 'add',
          });
        }}
      />
      <FlatList
        data={blogPosts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
