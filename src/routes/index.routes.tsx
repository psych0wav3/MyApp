import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InitialRoutes} from './atypes';
import {Main} from '../screens/Main';

export const Routes: React.FC = () => {
  const {Navigator, Screen} = createBottomTabNavigator<InitialRoutes>();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};
