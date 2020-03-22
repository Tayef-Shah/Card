import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './routes/bottomTab';

export default function App() {
    return (
      <Navigator />
    );
}