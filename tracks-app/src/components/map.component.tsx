import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { useLocationStore } from '../hooks/location.store';

const MapComponent = () => {
  const { currentLocation, locations } = useLocationStore();

  if (!currentLocation) {
    return <ActivityIndicator size={'large'} style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
      showsUserLocation
      followsUserLocation
    >
      <Polyline coordinates={locations.map((location) => location.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default MapComponent;
