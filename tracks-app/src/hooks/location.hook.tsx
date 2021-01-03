import { useEffect, useState } from 'react';
import { LocationAccuracy, LocationObject, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack: boolean, onLocationUpdate: (location: LocationObject) => void) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let subscriber: undefined | { remove: () => void };

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error('You need to grant location permission to create a new track.');
        }
        setError(null);

        subscriber = await watchPositionAsync(
          {
            accuracy: LocationAccuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          onLocationUpdate,
        );
      } catch (e) {
        setError(e);
      }
    };

    if (shouldTrack) startWatching();
    else {
      subscriber?.remove();
      subscriber = undefined;
    }

    return () => {
      subscriber?.remove();
    };
  }, [shouldTrack, onLocationUpdate]);

  return [error];
};
