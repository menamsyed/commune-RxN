import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigationHandler} from '../routes/NavigationHandler';

const Welcome = () => {
  const navigation = useNavigationHandler();
  return (
    <View style={{flex: 1}}>
      <Text>Welcome Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigateTo('PlayArea')}>
        <Text>got to playare</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
