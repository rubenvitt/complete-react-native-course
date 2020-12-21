import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultListItem from './result-list-item.component';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, data }) => {
  const navigation = useNavigation();

  if (data.length === 0) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
              <ResultListItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default ResultsList;
