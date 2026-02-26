import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Platform, View, StatusBar as RNStatusBar } from 'react-native';
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : RNStatusBar.currentHeight;

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={true} />
      <View style={{ height: STATUS_BAR_HEIGHT }} className="bg-[#0a1210]" />
      <AppNavigator />
    </NavigationContainer>
  );
}
