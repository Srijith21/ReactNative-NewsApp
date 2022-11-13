import {View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Here"
        style={styles.input}
        value={props.searchText}
        onChangeText={text => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    color: '#000',
  }
})