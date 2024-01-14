import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';

import { CustomButtonPorto, CustomButtonDetail } from './CustomButtonPorto';
import { Font14, Font16, Font18, FontDeskPorto } from './Font';
import { ImagePortofolio, ImageAvatar } from './Image';
import { LikeDislikeButton } from './LikeDislikeButton';

const { width, height } = Dimensions.get('window');

export default function App() {
  
  return (
    <ScrollView style={styles.container}>
      <ImageAvatar source={require('../assets/fotoalmet-2.png')} />
      <Font18 text="Muhammad Omar Nadiv" />
      <Font14 text="Saya adalah seorang pelajar SMK Telkom      Purwokerto, saya lahir di Banyumas, dan bertinggal di Sokaraja, tepatnya Sokaraja Lor. Saya tahun ini berumur 17 tahun." />
      <CustomButtonPorto
        label="Contact Me"
        onPress={() => alert('umarnadiv@gmail.com')}
      />

      <Font18 text="My Recent Projects" />

      <ImagePortofolio source={require('../assets/1.png')} />
      <Font16 text="UI/UX Website Kesehatan" />
      <FontDeskPorto text="UI/UX Design" />
      <CustomButtonDetail />
      <LikeDislikeButton/>

      <ImagePortofolio source={require('../assets/descode.png')} />
      <Font16 text="UI/UX Website E-Learning" />
      <FontDeskPorto text="UI/UX Design" />
      <CustomButtonDetail />
      <LikeDislikeButton/>

      <ImagePortofolio source={require('../assets/epsiko.jpg')} />
      <Font16 text="UI/UX Website Psikologi" />
      <FontDeskPorto text="UI/UX Design" />
      <CustomButtonDetail />
      <LikeDislikeButton/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
});
