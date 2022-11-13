import {Image, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import moment from 'moment';

export default function Article(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />
      <View style={{padding: 20}}>
        {/* title */}
        <Text style={styles.title}>{props.title}</Text>
        {/* description */}
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.heading}>
            By: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {/* {props.publishedAt} */}
            {moment(props.publishedAt).format('MMMM Do YYYY')}
          </Text>
        </View>
        {/* source */}
        <View style={{marginTop: 20}}>
          <Text>
            Source: <Text style={styles.source}>{props.source} </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  author: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: '#555',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 55,
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 20,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  date: {
    fontWeight: 'bold',
    color: '#e63946',
  },
  heading: {},
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  source: {
    fontSize: 16,
    color: '#e63946',
    fontWeight: '900',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
  },
});
