import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export function ImagePortofolio(props) {
  return (
    <View style={styles.center}>
      <Image source={props.source} style={styles.proyek1} />
    </View>
  );
}

export function ImageAvatar(props) {
  return (
    <View style={styles.center}>
      <Image source={props.source} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proyek1: {
    width: width * 0.9,
    height: height * 0.25,
  },
  avatar: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 0,
  },
});
