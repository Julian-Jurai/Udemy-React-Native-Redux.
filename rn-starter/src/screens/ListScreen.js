import React from 'react'
import {FlatList, View, Text, StyleSheet} from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: '12' },
    { name: 'Friend 2', age: '23' },
    { name: 'Friend 3', age: '53' },
    { name: 'Friend 4', age: '24' },
    { name: 'Friend 5', age: '15' },
    { name: 'Friend 6', age: '26' },
    { name: 'Friend 7', age: '57' }
  ]

  return (
  <FlatList
    data={friends}
    keyExtractor={friend => friend.name}
    renderItem={({item}) => {
      // element === { item: { name: 'Friend #1'}, index: 0}
      return <Text style={styles.textStyle}>{`${item.name} Age:${item.age}`}</Text>
    }}
  />)
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30
  }
})

export default ListScreen
