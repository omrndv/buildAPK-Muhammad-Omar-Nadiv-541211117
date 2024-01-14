import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';

export function CustomButtonPorto(props) {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btntext}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export function CustomButtonDetail(props) {
  return (
    <View style={styles.fixToText}>
      <View style={styles.btndetail}>
        <Button
          title="Detail"
          color="blue"
          onPress={() => Alert.alert('Left button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 5,
    backgroundColor: 'blue',
    padding: 10,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 35,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  btndetail: {
    borderRadius: 6,
    overflow: 'hidden',
  },
});
