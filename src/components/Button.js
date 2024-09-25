import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import theme from '../theme/Colors';
import {moderateScale} from 'react-native-size-matters';

const Button = props => {
  const {title, height, width, radius, backgroundColor, padding, onPress} =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        {
          backgroundColor: backgroundColor,
          borderRadius: radius,
          height: height,
          width: width,
          padding: padding,
        },
      ]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    textAlign: 'center',
    
  },
});
