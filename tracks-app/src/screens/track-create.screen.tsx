//import '../mocks/location.mock';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapComponent from '../components/map.component';
import SafeAreaView from 'react-native-safe-area-view';
import { Text } from 'react-native-elements';
import { LocationAccuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import { useLocationStore } from '../hooks/location.hook';

const TrackCreateScreen = () => {
  const [error, setError] = useState<Error | null>(null);
  const { addLocation } = useLocationStore();

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('You need to grant location permission to create a new track.');
      }
      setError(null);

      await watchPositionAsync(
        {
          accuracy: LocationAccuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        addLocation,
      );
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a track</Text>
      <MapComponent />
      {error ? <Text>Location services permission must be granted to use track-creation</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
