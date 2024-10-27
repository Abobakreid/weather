/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default function Home({navigation}) {
  const [data, setData] = useState({});
  const [location, setlocation] = useState('');
  useEffect(() => {
    GetInfo();
  }, []);
  function GetInfo() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Assiut'}&appid=${'68eb5d60f898b88ce0269777d8fd7ec6'}`;
    axios.get(url).then(response => {
      if (response) {
        setData(response.data);
      } else {
        Alert.alert('error');
      }
    });
  }
  function searchCityWeather() {
    if (location !== '') {
      navigation.navigate('Result', {location});
      setlocation('');
    }
  }
  return (
    <View style={styles.body}>
      <View style={styles.inputholder}>
        <Text style={styles.text}>{data.name}</Text>
        <TextInput
          value={location}
          onChangeText={value => setlocation(value)}
          style={styles.input}
          placeholder="Type The City"
        />
        <TouchableOpacity onPress={searchCityWeather} style={styles.searchButt}>
          <Text style={[{fontWeight: 'bold'}, {fontSize: 18}]}>Search</Text>
        </TouchableOpacity>
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
  inputholder: {
    paddingVertical: 20,
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    color: 'black',
    fontSize: 18,
  },
  searchButt: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    color: '#1F2C7D',
  },
  text: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
  },
});
