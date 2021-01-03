import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchTracks, postTrack } from '../api/tracks.api';
import { useLocationStore } from './location.store';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../App';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export const useSaveTrack = () => {
  const { locations, name, reset } = useLocationStore();
  const queryClient = useQueryClient();
  const { mutateAsync: createMutate } = useMutation('tracks', postTrack, {
    onSuccess: () => {
      queryClient.invalidateQueries('tracks');
    },
  });
  const { navigate } = useNavigation<BottomTabNavigationProp<MainStackParamList, 'TrackCreate'>>();

  const createTrack = async () => {
    await createMutate({ name, locations });
    reset();
    navigate('Tracks');
  };

  return [createTrack];
};
