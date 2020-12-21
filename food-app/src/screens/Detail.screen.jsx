import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { useQuery } from 'react-query';
import { getSingleBusiness, searchBusiness } from '../api/yelp';

const DetailScreen = ({ route, navigation }) => {
  const { data, isLoading, isError } = useQuery(['search', route.params.id], () => getSingleBusiness(route.params.id));

  return (
    <>
      {isError ? (
        <Text>Something went wrong</Text>
      ) : isLoading ? (
        <Text>Loading</Text>
      ) : !data.photos || data.photos.length === 0 ? (
        <Text>No photos available</Text>
      ) : (
        <FlatList
          data={data.photos}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
          keyExtractor={(item) => item}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default DetailScreen;
