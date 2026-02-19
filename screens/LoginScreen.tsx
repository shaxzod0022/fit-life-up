import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: { navigation: NavigationProp }) {
  return (
    <SafeAreaView className="flex-1 bg-[#0f172A]">
      <View className="flex-1 px-8 justify-center items-center">
        <Text className="text-white text-3xl font-bold mb-8">Login</Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="bg-[#21C45D] py-3 px-6 rounded-xl"
        >
          <Text className="text-white font-bold">Orqaga</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
