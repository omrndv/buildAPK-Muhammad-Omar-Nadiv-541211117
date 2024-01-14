import { Text, StyleSheet } from 'react-native';

export function Font14(props) {
  return (
      <Text style={styles.title14}>{props.text}</Text>
  );
}

export function Font16(props) {
  return (
      <Text style={styles.title16}>{props.text}</Text>
  );
}

export function Font18(props) {
  return (
      <Text style={styles.title18}>{props.text}</Text>
  );
}

export function FontDeskPorto(props) {
  return (
      <Text style={styles.title14desk}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
  title14: {
    fontSize: 14,
    marginBottom: 10
  },
  title14desk: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 8,
  },
  title16: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title18: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
