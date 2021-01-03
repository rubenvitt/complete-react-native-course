//import '../mocks/location.mock';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapComponent from '../components/map.component';
import SafeAreaView from 'react-native-safe-area-view';
import { Text } from 'react-native-elements';
import { useLocationStore } from '../hooks/location.store';
import useLocation from '../hooks/location.hook';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainStackParamList } from '../../App';
import TrackForm from '../components/track-form.component';

type TrackCreateScreenNavigationProp = BottomTabNavigationProp<MainStackParamList, 'TrackCreate'>;

type Props = {
  navigation: TrackCreateScreenNavigationProp;
};

const TrackCreateScreen: React.FC<Props> = ({ navigation }) => {
  const { addLocation, recording } = useLocationStore();
  const [error] = useLocation(navigation.isFocused() || recording, addLocation);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a track</Text>
      <MapComponent />
      {error ? <Text>Location services permission must be granted to use track-creation</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
