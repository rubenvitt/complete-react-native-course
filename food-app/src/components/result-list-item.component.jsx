import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultListItem = ({ item }) => {
  console.log('item', item);
  // rating
  // review_count

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image_url === '' ? 'https://placebear.com/640/360' : item.image_url,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    height: 100,
    marginBottom: 5,
    width: 250,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultListItem;
