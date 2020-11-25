import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const ComponenetsScreen  = () => {
  const fullName = 'Julian Jurai';

  return (
    <View>
      <Text style={styles.headerStyle}>Gettting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name in {fullName}!</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 40
  },
  subHeaderStyle: {
    fontSize: 20
  }
});


export default ComponenetsScreen
