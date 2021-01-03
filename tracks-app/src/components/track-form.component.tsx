import React from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './spacer.component';
import { useLocationStore } from '../hooks/location.store';
import { useSaveTrack } from '../hooks/track.hooks';

const TrackForm = () => {
  const { name, recording, locations, changeName, startRecording, stopRecording } = useLocationStore();
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder={'Enter a track-name'} />
        {recording ? (
          <Button title={'Stop'} onPress={stopRecording} />
        ) : (
          <Button title={'Start recording'} onPress={startRecording} />
        )}
        {!recording && locations.length > 0 && (
          <Button onPress={saveTrack} style={{ marginTop: 10 }} title={'Save track'} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
