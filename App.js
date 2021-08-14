import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigator />      
    </View>
  );
}