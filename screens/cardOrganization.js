import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CardOrganization({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ContactList');
    //navigation.push('ContactList');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Card Organization Screen</Text>
      <Button title='to Contact List screen' onPress={pressHandler} />
    </View>
  );
}