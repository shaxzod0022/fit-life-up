import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from 'screens/HomeScreen'; // Dashboard sahifasi
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Vaqtincha boshqa sahifalar uchun bo'sh komponentlar
const Placeholder = ({ title }: { title: string }) => (
  <View className="flex-1 items-center justify-center bg-[#0f172A]">
    <Text className="text-white">{title}</Text>
  </View>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0f172A',
          borderTopWidth: 1,
          borderColor: "yellow",
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#22C55E',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;
          if (route.name === 'Asosiy') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Mashqlar') iconName = 'dumbbell';
          else if (route.name === 'Statistika') iconName = 'chart-bar';
          else if (route.name === 'Profil') iconName = 'account';

          return route.name === 'Asosiy' ? (
            <Ionicons name={iconName} size={size} color={color} />
          ) : (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Asosiy" component={HomeScreen} />
      <Tab.Screen name="Mashqlar" children={() => <Placeholder title="Mashqlar Sahifasi" />} />
      <Tab.Screen name="Statistika" children={() => <Placeholder title="Statistika Sahifasi" />} />
      <Tab.Screen name="Profil" children={() => <Placeholder title="Profil Sahifasi" />} />
    </Tab.Navigator>
  );
}
