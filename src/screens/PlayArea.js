import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigationHandler} from '../routes/NavigationHandler';
import theme from '../theme/Colors';
import Board from '../components/Board';
const PlayArea = () => {
  const navigation = useNavigationHandler();
  return (
    <>
      <StatusBar backgroundColor={theme.primary} />
      <SafeAreaView style={styles.mainContainer}>
        <Board />
      </SafeAreaView>
    </>
  );
};

export default PlayArea;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
