import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { add } from "./src/StringCalculator";

interface ErrorInterface {
  message: string;
}

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>();
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      const sum = add(input);
      setResult(sum);
    } catch (e: ErrorInterface | any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
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
  result: {
    marginTop: 20,
    fontSize: 20,
  },
  error: {
    marginTop: 20,
    color: "red",
  },
});

export default App;
