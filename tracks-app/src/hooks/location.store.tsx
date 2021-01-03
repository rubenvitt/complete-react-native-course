import create from 'zustand';
import { LocationObject } from 'expo-location';

type LocationStoreType = {
  recording: boolean;
  name: string;
  reset: () => void;
  changeName: (name: string) => void;
  currentLocation?: LocationObject;
  locations: LocationObject[];
  startRecording: () => void;
  stopRecording: () => void;
  addLocation: (location: LocationObject) => void;
};

export const useLocationStore = create<LocationStoreType>((set, get) => ({
  reset: () => {
    set({
      name: '',
      locations: [],
    });
  },
  locations: [],
  recording: false,
  startRecording: () => {
    console.log('start recording');
    set({
      recording: true,
    });
  },
  stopRecording: () => {
    console.log('stop recording');
    set({
      recording: false,
    });
  },
  addLocation: (location) => {
    const locations = get().locations;
    get().recording && locations.push(location) && console.log('locationSize', locations.length);
    set({ currentLocation: location, locations: locations });
  },
  changeName: (name) => set({ name: name }),
  name: '',
}));

const useLocationMethods = () => {
  const startRecording = () => {
    //
  };
  const stopRecording = () => {
    //
  };
};
