import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
      <View>
        <Text style={styles.text}>Hi there!</Text>
        <Button
          title={"Open Components Screen"}
          onPress={() => {
            navigation.navigate("Components");
          }}
        />
        <Button
          title={"Open List Screen"}
          onPress={() => navigation.navigate("List")}
        />
        <Button
          title={"Open Image Screen"}
          onPress={() => navigation.navigate("Image")}
        />
        <Button
          title={"Open Counter Screen"}
          onPress={() => navigation.navigate("Counter")}
        />
        <Button
          title={"Open Colors Screen"}
          onPress={() => navigation.navigate("Colors")}
        />
        <Button
          title={"Open Square Screen"}
          onPress={() => navigation.navigate("Square")}
        />
        <Button
          title={"Open Text Screen"}
          onPress={() => navigation.navigate("Text")}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
