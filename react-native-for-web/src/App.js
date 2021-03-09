import "./App.css";
import { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

function App() {
  const [breeds, setBreeds] = useState(null);
  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const { message } = await res.json();
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
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            console.log("onPress");
          }}
        >
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    justifyContent: "center",
    height: 50,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
});


export default App;