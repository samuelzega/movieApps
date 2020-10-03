import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default function Detail({route: {params}, navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w154/' + params.movie.backdrop_path,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Title</Text>
      <Text style={styles.desc}>{params.movie.original_title}</Text>
      <Text style={styles.title}>Popularity</Text>
      <Text style={styles.desc}>{params.movie.popularity}</Text>
      <Text style={styles.title}>Vote Count</Text>
      <Text style={styles.desc}>{params.movie.vote_count}</Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.desc}>{params.movie.overview}</Text>
      <Text style={styles.title}>Release Date</Text>
      <Text style={styles.desc}>{params.movie.release_date}</Text>
    </View>
  );
}
