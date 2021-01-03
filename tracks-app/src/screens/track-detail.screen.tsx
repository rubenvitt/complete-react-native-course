import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrackStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { fetchTracks } from '../api/tracks.api';
import MapView, { Polyline } from 'react-native-maps';

type TrackDetailScreenNavigationProp = StackNavigationProp<TrackStackParamList, 'TrackDetail'>;
type RouteProps = RouteProp<TrackStackParamList, 'TrackDetail'>;

type Props = {
  navigation: TrackDetailScreenNavigationProp;
  route: RouteProps;
};

const TrackDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { data, isFetching } = useQuery('tracks', fetchTracks);

  const track = data?.find((element) => element._id === route.params.id);

  if (!track) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  return (
    <View>
      <Text h2>{track?.name}</Text>
      <MapView
        style={{
          height: 300,
        }}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...track.locations[0].coords,
        }}
      >
        <Polyline coordinates={track.locations.map((element) => element.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
