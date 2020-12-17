import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = ({title, img, score}) => {
    return <View>
        <Image source={img}/>
        <Text>Show image of {title}</Text>
        <Text>Image score - {score}</Text>
    </View>
};

const style = StyleSheet.create({});

export default ImageDetail;