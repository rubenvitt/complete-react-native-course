import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlogPost, Context, IContext } from '../context/blogpost.context';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { MaterialIcons } from '@expo/vector-icons';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchAllBlogPosts, removeBlogPost } from '../api/blogpost.api';

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

type Props = {
  navigation: IndexScreenNavigationProp;
};

export const IndexScreen: React.FC<Props> = ({ navigation }) => {
  const { state, addBlogPost, emptyList } = useContext(Context) as IContext;

  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery('blogPosts', fetchAllBlogPosts);
  const { mutate } = useMutation('blogPosts', removeBlogPost, {
    onSuccess: () => {
      emptyList();
      queryClient.invalidateQueries('blogPosts');
    },
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      refetch();
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      data?.forEach(addBlogPost);
    }
  }, [data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create');
            }}
          >
            <MaterialIcons style={styles.addIcon} name="create" size={30} color="black" />
          </TouchableOpacity>
        );
      },
    });
  });

  return (
    <FlatList
      data={state}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', {
                blogPostId: item.id,
              });
            }}
          >
            <View style={styles.blogPostContainer}>
              <Text style={styles.blogPostText}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  mutate(item);
                }}
              >
                <FontAwesome style={styles.blogPostIcon} name="trash-o" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id ?? 'undefined'}
    />
  );
};

const styles = StyleSheet.create({
  addIcon: {
    marginRight: 10,
  },
  blogPostContainer: {
    borderTopColor: 'rgb(33,33,33)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  blogPostIcon: {
    color: 'rgb(200,0,0)',
    fontSize: 24,
  },
  blogPostText: {
    fontSize: 18,
  },
});

export default IndexScreen;
