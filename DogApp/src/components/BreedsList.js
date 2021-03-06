/**
 * @format
 * @flow strict-local
 */

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Breed from './Breed';

const BreedsList: () => React$Node = () => {
  const [breeds, setBreeds] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const {message} = await res.json();
      setBreeds(Object.keys(message));
    };
    fetchBreeds();
  }, []);

  if (breeds === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={breeds}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Breed.name, {
              breed: item,
            });
          }}>
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    height: 50,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default {
  components: BreedsList,
  name: 'BreedsList',
};
