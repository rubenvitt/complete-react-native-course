import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.viewBox}>
      <FontAwesome style={styles.icon} name="search" size={24} color="black" />
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        value={term}
        onChangeText={setTerm}
        style={styles.textInput}
        placeholder={'Search'}
        onEndEditing={() => onSubmit(term)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginLeft: 10,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 24,
    marginHorizontal: 20,
  },
  viewBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default SearchBar;
