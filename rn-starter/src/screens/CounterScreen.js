import React from "react";
import { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useReducer((state, action) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state - 1;
    }
  }, 0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => setCounter({ type: "increase" })}
      />
      <Button
        title="Decrease"
        onPress={() => setCounter({ type: "decrease" })}
      />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
