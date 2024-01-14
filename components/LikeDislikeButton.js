import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function LikeDislikeButton(props) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLike} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </TouchableOpacity>
      <Text style={styles.likeCount}>{likeCount}</Text>
      <TouchableOpacity onPress={handleDislike} style={styles.button}>
        <Text style={styles.buttonText}>Dislike</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 19,
    paddingVertical: 8,
    borderRadius: 5, 
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
  },
  likeCount: {
    fontSize: 18, 
    marginHorizontal: 79
  },
});
