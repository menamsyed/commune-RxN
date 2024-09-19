import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import theme from '../theme/Colors';

const Box = (props) => {
    const {value,onPress} = props
  
   
  
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.checkTitle}>{value}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Box;

const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(70),
    width: scale(70),
    backgroundColor: theme.white,
    margin: moderateScale(4),
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkTitle: {
    fontSize: scale(40),
    color: 'black',
    textAlign: 'center',
    fontWeight: 'heavy',
  },
});
