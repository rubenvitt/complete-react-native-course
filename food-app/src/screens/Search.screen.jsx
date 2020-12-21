import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/search-bar.component';
import { useQuery } from 'react-query';
import { searchBusiness } from '../api/yelp';
import ResultsList from '../components/results-list.component';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, isError } = useQuery(['search', searchTerm], () =>
    searchBusiness(searchTerm, 'Endeholz, Germany'),
  );

  const filterResultsByPrice = (price) => {
    return data.filter((d) => d.price === price);
  };

  return (
    <>
      <SearchBar onSubmit={setSearchTerm} />
      {isLoading ? (
        <Text>Loading</Text>
      ) : isError ? (
        <Text>Something went wrong. 🧨</Text>
      ) : (
        <ScrollView>
          <ResultsList title={'Cost effective'} data={filterResultsByPrice('€')} />
          <ResultsList title={'Bit Pricier'} data={filterResultsByPrice('€€')} />
          <ResultsList title={'Big spender'} data={filterResultsByPrice('€€€')} />
          <ResultsList title={'Dont know'} data={filterResultsByPrice(undefined)} />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
