import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            let iconPath;
            if (route.name === 'Home') {
              iconPath = focused
                ? require('./src/assets/images/icons/icons8-home-page2.png')
                : require('./src/assets/images/icons/icons8-home-page1.png');
            } else {
              iconPath = focused
                ? require('./src/assets/images/icons/icons8-search-64.png')
                : require('./src/assets/images/icons/icons8-search-48.png');
            }
            return <Image style={styles.image} source={iconPath} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'NEWS FEED',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            title: 'Explore Here',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 22,
    width: 22,
  },
});
