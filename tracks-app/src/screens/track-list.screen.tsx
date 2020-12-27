import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList, TrackStackParamList } from '../../App';

type TrackListScreenNavigationProp = StackNavigationProp<TrackStackParamList, 'TrackList'>;

type Props = {
  navigation: TrackListScreenNavigationProp;
};

const TrackListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>TrackList Screen</Text>
      <Button title={'To detail view'} onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
