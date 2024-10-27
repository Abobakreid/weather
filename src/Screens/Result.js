/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Alert, Text, View} from 'react-native';
import axios from 'axios';

export default function Result({navigation, route}) {
  const [data, setData] = useState({});
  const {location} = route.params;
  useEffect(() => {
    GetInfo();
  }, []);
  
  function GetInfo() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'68eb5d60f898b88ce0269777d8fd7ec6'}`;
    axios
      .get(url)
      .then(response => {
        if (response) {
          setData(response.data);
        }
      })
      .catch(() => {
        navigation.navigate('Home');
        Alert.alert('Type Right City');
      });
  }
  return (
    <View style={styles.body}>
      <View style={styles.info}>
        <Text style={styles.text}>{data.name}</Text>
        {data.main ? <Text style={styles.text}>{data.main.temp} F</Text> : null}
        {data.weather ? (
          <Text style={styles.text}>{data.weather[0].main}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F2C7D',
  },
  info: {
    paddingVertical: 20,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
  },
});
