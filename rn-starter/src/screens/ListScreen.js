import React from "react";
import {Text, StyleSheet, FlatList, View} from "react-native";

const ListScreen = () => {
    const elements = [
        {name: 'Friend #1', age: 19},
        {name: 'Friend #2', age: 20},
        {name: 'Friend #3', age: 19},
        {name: 'Friend #4', age: 35},
        {name: 'Friend #5', age: 43},
        {name: 'Friend #6', age: 45},
        {name: 'Friend #7', age: 80},
        {name: 'Friend #8', age: 45},
    ];

    return <FlatList
        keyExtractor={(element) => element.name}
        data={elements}
        renderItem={({item}) => <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>}
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;