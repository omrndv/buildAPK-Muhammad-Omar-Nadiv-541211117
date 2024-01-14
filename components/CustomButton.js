import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function CustomButton(props) {
  const { label, onPress } = props;
  
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btntext}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    backgroundColor: '#1DA756',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1DA756',
    borderWidth: 2,
    borderRadius: 6,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
