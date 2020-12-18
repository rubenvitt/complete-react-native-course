import React, { useState } from 'react';
import { useReducer } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter.component';

const CHANGE_VALUE = 15;

const SquareScreen = () => {
    const [{red, green, blue}, changeColor] = useReducer((state, action) => {
        const result = {...state}
        action.red !== undefined ? result.red += action.red : undefined;
        action.green !== undefined ? result.green += action.green : undefined;
        action.blue !== undefined ? result.blue += action.blue : undefined;

        result.red > 255 || result.red < 0 ? result.red = state.red : undefined;
        result.green > 255 || result.green < 0 ? result.green = state.green : undefined;
        result.blue > 255 || result.blue < 0 ? result.blue = state.blue : undefined;

        console.log('result', result)

        return result;

    }, {red: 0, green: 0, blue: 0})

    return <View>
        <ColorCounter onIncrease={() => changeColor({red: CHANGE_VALUE})} onDecrease={() => changeColor({red: CHANGE_VALUE * -1})} color="Red" />
        <ColorCounter onIncrease={() => changeColor({green: CHANGE_VALUE})} onDecrease={() => changeColor({green: CHANGE_VALUE * -1})} color="Green" />
        <ColorCounter onIncrease={() => changeColor({blue: CHANGE_VALUE})} onDecrease={() => changeColor({blue: CHANGE_VALUE * -1})} color="Blue" />
        <View style={{ height: 100, width: '100%', backgroundColor: `rgb(${red},${green},${blue})`, marginTop: 30 }} />
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen;
