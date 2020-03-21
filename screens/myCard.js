import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MyCard({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ContactList');
    //navigation.push('ContactList');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>My Card Screen</Text>
      <Button title='to Contact List screen' onPress={pressHandler} />
    </View>
  );
}