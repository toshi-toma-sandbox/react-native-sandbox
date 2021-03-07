/**
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';

const RandomList: () => React$Node = () => {
  const [dogs, setDogs] = useState(null);
  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random/100');
      const {message} = await res.json();
      setDogs(message);
    };
    fetchDogs();
  }, []);

  if (dogs === null) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={dogs}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Image
            source={{
              uri: item,
            }}
            style={styles.image}
          />
        </View>
      )}
      keyExtractor={item => item}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    height: 100,
    paddingHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default RandomList;
