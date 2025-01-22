import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Calculate" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
export default App;
