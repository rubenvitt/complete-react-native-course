import axios from './tracker.axios-config';
import { LocationObject } from 'expo-location';

export const postTrack = async (data: { name: string; locations: LocationObject[] }) => {
  return await axios
    .post('/tracks', {
      name: data.name,
      locations: data.locations,
    })
    .catch((reason) => {
      console.error(reason);
      throw new Error('Something went wrong');
    });
};

export const fetchTracks: () => Promise<{ _id: string; name: string; locations: LocationObject[] }[]> = async () => {
  const { data } = await axios.get('/tracks').catch((reason) => {
    console.error(reason);
    throw new Error('Something went wrong');
  });

  return data as (LocationObject & { _id: string; name: string })[];
};
