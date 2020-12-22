import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { BlogPost, Context, IContext } from '../context/blogpost.context';

export const IndexScreen = () => {
  const context = useContext(Context);

  return (
    <View>
      <Text>Index screen: {context.state.length} elements</Text>
      <Button
        title={'Add blogpost'}
        onPress={() => {
          (context as IContext).addBlogPost({
            title: 'Test-BlogPost #' + context.state.length,
            id: String(context.state.length),
          });
        }}
      />
      <FlatList
        data={context.state}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
