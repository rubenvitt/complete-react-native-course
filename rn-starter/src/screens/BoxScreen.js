import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textStyle1} />
            <View style={styles.textStyle2}/>
            <View style={styles.textStyle3}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start'
    },
    textStyle1: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'red',
    },
    textStyle2: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'green',
        alignSelf: 'center'
    },
    textStyle3: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'blue',
    }
});

export default BoxScreen;
