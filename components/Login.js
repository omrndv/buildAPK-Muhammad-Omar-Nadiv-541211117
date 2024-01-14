import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { CustomInput, CustomInputSandi } from './CustomInput';
import CustomButton from './CustomButton';

export default function Register({navigation}) {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>E-Psiko</Text>
        <Image
          style={styles.imglogin}
          source={require('../assets/comp-login2.png')}
        />
      </View>

      <CustomInput
        label="Email"
        placeholder="Masukkan Email Kamu"
        value={text}
        onChangeText={setText}
      />

      <CustomInput
        label="Sandi"
        placeholder="Masukkan Sandi Kamu"
        value={text}
        onChangeText={setText}
      />

      <View style={styles.lupasandi}>
        <Text>
          Lupa Sandi?
        </Text>
      </View>

      <CustomButton
        style={styles.btnlogin}
        label="Masuk"
        onPress={() => navigation.navigate('Portofolio')}
      />

      <View style={styles.center}>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>
          Belum punya akun? <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#1DA756' }}>Daftar</Text>
          </TouchableOpacity>
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    padding: 24,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogin: {
    width: 300,
    height: 160,
  },
  lupasandi: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 200,
    marginTop: 5
  }
});
