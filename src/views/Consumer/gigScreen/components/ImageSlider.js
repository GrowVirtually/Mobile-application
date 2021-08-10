import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import {secondary} from "../../../../styles/abstracts/colors";

const ImageSlider = ({gigImages}) => {
  return (
    <View>
      <SliderBox sliderBoxHeight={200} dotColor={secondary.color} images={gigImages} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
