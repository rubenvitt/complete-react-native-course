import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail.component";

const ImageScreen = () => {
    return <View>
        <ImageDetail title={'Forest'} img={require('../../assets/forest.jpg')} score={9}/>
        <ImageDetail title={'Beach'} img={require('../../assets/beach.jpg')} score={7}/>
        <ImageDetail title={'Mountain'} img={require('../../assets/mountain.jpg')} score={4}/>
    </View>
};

const style = StyleSheet.create({});

export default ImageScreen;