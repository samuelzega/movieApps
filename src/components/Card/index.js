import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export default function Card({movie, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {movie})}
      style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.starContainer}>
          <Image source={require('../../assets/star.png')} />
          <Text style={styles.desc}>{Math.trunc(movie.popularity)}</Text>
        </View>
      </View>
      {movie.poster_path ? (
        <Image
          source={{uri: 'https://image.tmdb.org/t/p/w154/' + movie.poster_path}}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.backgroundGrey]} />
      )}
    </TouchableOpacity>
  );
}
