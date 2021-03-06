/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BreedsList from '../components/BreedsList';
import Breed from '../components/Breed';
const Stack = createStackNavigator();

const BreedsScreen: () => React$Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={BreedsList.name} component={BreedsList.components} />
      <Stack.Screen name={Breed.name} component={Breed.components} />
    </Stack.Navigator>
  );
};

export default {
  components: BreedsScreen,
  name: 'BreedsScreen',
};
