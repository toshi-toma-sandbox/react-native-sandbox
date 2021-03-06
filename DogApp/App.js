/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BreedsScreen from './src/screen/Breeds';
import Random from './src/screen/Random';
import {SafeAreaView} from 'react-native';

const Tabs = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
          <Tabs.Screen
            name={BreedsScreen.name}
            component={BreedsScreen.components}
            options={{
              title: '犬種',
            }}
          />
          <Tabs.Screen
            name={Random.name}
            component={Random.component}
            options={{title: 'ランダム'}}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
