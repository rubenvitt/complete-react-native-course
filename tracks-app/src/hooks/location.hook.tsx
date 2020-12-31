import create from 'zustand';
import { LocationObject } from 'expo-location';

type LocationStoreType = {
  recording: boolean;
  currentLocation?: LocationObject;
  locations: LocationObject[];
  startRecording: () => void;
  stopRecording: () => void;
  addLocation: (location: LocationObject) => void;
};

export const useLocationStore = create<LocationStoreType>((set, get) => ({
  locations: [],
  recording: false,
  startRecording: () => {
    //
  },
  stopRecording: () => {
    //
  },
  addLocation: (location) => {
    set({ currentLocation: location });
  },
}));

const useLocationMethods = () => {
  const startRecording = () => {
    //
  };
  const stopRecording = () => {
    //
  };
};
