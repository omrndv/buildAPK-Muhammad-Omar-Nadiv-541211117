import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { CustomInput, CustomInputSandi } from './CustomInput';
import CustomButton from './CustomButton';

export default function Register({ navigation }) {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>E-Psiko</Text>
        <Image
          style={styles.imglogin}
          source={require('../assets/comp-login.png')}
        />
      </View>

      <CustomInput
        label="Email"
        placeholder="Masukkan Email Kamu"
        value={text}
        onChangeText={setText}
      />

      <CustomInput
        label="Nama Lengkap"
        placeholder="Masukkan Nama Lengkap Kamu"
        value={text}
        onChangeText={setText}
      />

      <View style={styles.fixToText2}>
        <CustomInputSandi
          label="Sandi"
          placeholder="Masukkan Sandi"
          value={text}
          onChangeText={setText}
        />

        <CustomInputSandi
          label="Konfirmasi"
          placeholder="Konfirmasi Sandi"
          value={text}
          onChangeText={setText}
        />
      </View>

      <View style={styles.daftar}>
        <View style={styles.center}>
          <Text style={styles.dengan}>Dengan daftar, saya menyetujui</Text>
          <Text>
            <Text style={{ color: '#1DA756' }}>Syarat & Ketentuan</Text>
            <Text style={styles.dengan}> dan </Text>
            <Text style={{ color: '#1DA756' }}>Kebijakan Privasi</Text>
          </Text>
        </View>
      </View>

      <CustomButton
        style={styles.btnlogin}
        label="Daftar"
        onPress={() => navigation.navigate('Login')}
      />

      <View style={styles.center}>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>
          Sudah punya akun?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#1DA756' }}>Masuk</Text>
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
    paddingBottom: 200,
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
  fixToText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daftar: {
    fontWeight: 'bold',
    marginTop: 100,
  },
  dengan: {
    color: 'grey',
  },
});
