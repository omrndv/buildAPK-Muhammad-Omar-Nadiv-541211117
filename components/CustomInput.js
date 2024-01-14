import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export function CustomInput(props) {
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
}

export function CustomInputSandi(props) {
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input2}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  input2: {
    height: 40,
    width: 148,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
});
