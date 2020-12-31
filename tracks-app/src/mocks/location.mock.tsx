import * as Location from 'expo-location';
const tenMeters = 0.0001;

const getLocation = (increment: number) => {
  return {
    timeStamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312136 + increment * tenMeters,
      latitude: 37.33233141 + increment * tenMeters,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter++),
  });
}, 1000);
