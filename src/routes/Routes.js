import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenAlias from './ScreenAlias';

//importing SCREENS
import Welcome from '../screens/Welcome';
import theme from '../theme/Colors';
import screenName from './ScreenAlias';
import PlayArea from '../screens/PlayArea';
import Score from '../screens/Score';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='PlayArea'
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: theme.primary},
          headerTitleStyle: {color: theme.white, fontWeight: 'bold'},
          headerTitleAlign: 'center',
          animation: 'slide_from_left',
          headerTintColor: theme.white,
          animationEnabled: true, 
          
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: ScreenAlias.Welcome}}
        />
        <Stack.Screen
          name="PlayArea"
          component={PlayArea}
          options={{title: ScreenAlias.PlayArea}}
        />
        <Stack.Screen
          name="Score"
          component={Score}
          options={{title: ScreenAlias.Score}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
