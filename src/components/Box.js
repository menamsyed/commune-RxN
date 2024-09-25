import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import theme from '../theme/Colors';
const Box = props => {
  const {value, onPress, isNext, width, height} = props;
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        {value && (
          <>
            <Icon
              name={value === 'X' ? 'close' : 'radio-button-unchecked'}
              size={60}
              color={value === 'X' ? theme.primary : theme.secondary}
            />
          </>
        )}
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
    textAlign: 'center',
    fontWeight: 'heavy',
  },
});
