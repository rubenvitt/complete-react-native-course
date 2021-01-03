import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrackStackParamList } from '../../App';
import { useQuery } from 'react-query';
import { fetchTracks } from '../api/tracks.api';
import { ListItem } from 'react-native-elements';

type TrackListScreenNavigationProp = StackNavigationProp<TrackStackParamList, 'TrackList'>;

type Props = {
  navigation: TrackListScreenNavigationProp;
};

const TrackListScreen: React.FC<Props> = ({ navigation }) => {
  const { data, isFetching } = useQuery('tracks', fetchTracks);

  return (
    <>
      {isFetching && <Text>Is fetching...</Text>}
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { id: item._id })}>
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
