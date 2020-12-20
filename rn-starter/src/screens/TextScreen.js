import React, {useState, useReducer} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={setName}
                value={name}
            />
            {
                name.length > 5 ? <Text>Hey, {name}</Text> : <Text>Please enter more than 5 characters</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: "#000",
        borderWidth: 1,
    },
});

export default TextScreen;
