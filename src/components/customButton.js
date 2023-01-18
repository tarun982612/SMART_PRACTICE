import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import COLOR from '../assets/color';
import FONTS from '../assets/fonts';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '70%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    borderRadius: 25,
  },

  text: {
    fontWeight: '900',
    color: COLOR.WHITE,
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
  },
});

export default CustomButton;
