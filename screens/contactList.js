import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ContactList({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>ContactList Screen</Text>
      <Button title='back to card organization screen' onPress={pressHandler} />
    </View>
  );
}