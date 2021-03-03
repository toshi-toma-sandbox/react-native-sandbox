/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Child = props => (
  <View>
    <Text>Hello {props.name}</Text>
  </View>
);

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.center]}>
      <Text>Hello, world! React Native</Text>
      <Child name="toma" />
      <Child name="toshi" />
      <Text>Counter: {count}</Text>
      <TouchableOpacity
        style={[styles.button, {marginTop: 16}]}
        onPress={() => setCount(s => s + 1)}>
        <Text>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
