/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default function Loading({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.Imglogo}>
        <Image
          style={styles.tinyLogo}
          source={require('./../../assets/wea.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2C7D',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});
