/**
 * @format
 * @flow strict-local
 */

import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
} from 'react-native';

const Breed: () => React$Node = () => {
  const [breed, setBreed] = useState(null);
  const route = useRoute();
  useEffect(() => {
    const fetchBreed = async () => {
      const res = await fetch(
        `https://dog.ceo/api/breed/${route.params.breed}/images`,
      );
      const {message} = await res.json();
      setBreed(message);
    };
    fetchBreed();
  }, [route.params.breed]);

  if (breed === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <Text style={styles.name}>{route.params.breed}</Text>
      <FlatList
        data={breed}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item,
              }}
              style={styles.image}
            />
            <Text style={styles.urlText}>{item}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  urlText: {
    fontSize: 12,
  },
});

export default {
  components: Breed,
  name: 'Breed',
};
