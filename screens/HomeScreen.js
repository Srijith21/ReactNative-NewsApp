import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Article from '../components/Article';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d6adfc4094d4e85ad1ea1cfc6f02103',
        {
          params: {
            category: 'technology',
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
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            source={item.source.name}
          />
        )}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}
