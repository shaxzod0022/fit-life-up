import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from 'screens/HomeScreen';
import ExercisesScreen from 'screens/ExercisesScreen';
import ProfileScreen from 'screens/ProfileScreen';
import NutritionScreen from 'screens/NutritionScreen';
import SleepJournalScreen from 'screens/SleepJournalScreen';
import { TabParamList } from 'types/navigation.interface';
import { View } from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121b18',
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          height: 60,
          marginHorizontal: 16,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'rgba(34, 197, 94, 0.2)',
          elevation: 10,
          shadowColor: '#18da61',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 30,
          paddingBottom: 0,
        },
        tabBarActiveTintColor: '#18da61',
        tabBarInactiveTintColor: '#4b5563',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;
          const iconSize = focused ? 20 : 18;

          if (route.name === 'Asosiy') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Mashqlar') iconName = 'dumbbell';
          else if (route.name === 'Ovqat') iconName = 'food';
          else if (route.name === 'Uyqu') iconName = 'sleep';
          else if (route.name === 'Profil') iconName = 'account-circle-outline';

          return (
            <View className={`items-center justify-center ${focused ? 'scale-110' : ''}`}>
              {route.name === 'Asosiy' ? (
                <Ionicons name={iconName} size={iconSize} color={color} />
              ) : (
                <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />
              )}
            </View>
          );
        },
      })}>
      <Tab.Screen name="Asosiy" component={HomeScreen} />
      <Tab.Screen name="Mashqlar" component={ExercisesScreen} />
      <Tab.Screen name="Ovqat" component={NutritionScreen} />
      <Tab.Screen name="Uyqu" component={SleepJournalScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
