import {View, StyleSheet, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import Article from '../components/Article';


export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState('');

  const searchArticles = () =>{
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d6adfc4094d4e85ad1ea1cfc6f02103',
        {
          params: {
            category: 'technology',
            q: searchText,
          },
        },
      )
      .then(response => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      <FlatList 
        data={articles} 
        renderItem={({item})=>
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            source={item.source.name}
          />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
  },
})