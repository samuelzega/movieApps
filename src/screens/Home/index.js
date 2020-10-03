import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Card} from '../../components';
import {search as searchApi} from '../../api';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    result.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
  }, [result]);
  useEffect(() => {
    getLastSearch();
  }, []);
  const search = (text) => {
    setLoading(true);
    setKeyword(text);
    if (text.length > 3) {
      searchApi({keyword: text})
        .then(({data}) => {
          AsyncStorage.setItem('lastSearch', text);
          setResult(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const getLastSearch = async () => {
    const lastSearch = await AsyncStorage.getItem('lastSearch');
    if (lastSearch) search(lastSearch);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={keyword}
        placeholder="Search Here"
        onChangeText={(text) => search(text)}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Info')}
        style={styles.touchable}>
        <Text style={styles.about}>About</Text>
      </TouchableOpacity>
      <ScrollView>
        {result.length > 0 ? (
          result.map((movie, index) => {
            return <Card navigation={navigation} movie={movie} key={index} />;
          })
        ) : (
          <Text>Please Search something</Text>
        )}
        {loading && <ActivityIndicator size="large" color="black" />}
        <View style={{marginVertical: 50}} />
      </ScrollView>
    </View>
  );
}
