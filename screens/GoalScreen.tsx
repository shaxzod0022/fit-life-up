import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Goal'>;

interface GoalOption {
  id: string;
  title: string;
  description?: string;
  icon: any;
  type: 'material' | 'feather';
}

const goals: GoalOption[] = [
  { id: 'weight-loss', title: 'Vazn tashlash', icon: 'weight-lifter', type: 'material' },
  { id: 'muscle-gain', title: 'Mushak oshirish', icon: 'zap', type: 'feather' },
  { id: 'keep-fit', title: 'Vaznni saqlash', icon: 'scale-bathroom', type: 'material' },
  {
    id: 'rehab',
    title: 'Reabilitatsiya',
    description: 'Jarohatdan keyingi tiklanish va maxsus mashqlar',
    icon: 'bandage',
    type: 'material',
  },
];

export default function GoalScreen({ navigation }: { navigation: NavigationProp }) {
  const [selectedGoal, setSelectedGoal] = useState<string>('rehab');

  return (
    <SafeAreaView className="flex-1 bg-[#0f172A]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-6 py-12">
          {/* Header */}
          <View className="mb-8 flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Feather name="chevron-left" size={24} color="#21C45D" />
            </TouchableOpacity>
            <View className="flex-row gap-x-1">
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-5 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-white/20" />
            </View>
          </View>

          {/* Titles */}
          <View className="mb-8">
            <Text className="mb-4 text-center text-3xl font-bold text-white">
              Asosiy maqsadni tanlang
            </Text>
            <Text className="text-center text-base leading-6 text-[#21C45D]">
              Dasturni sizga moslashtirishimiz uchun asosiy maqsadingizni belgilang
            </Text>
          </View>

          {/* Goal Options List */}
          <View className="gap-y-4">
            {goals.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                onPress={() => setSelectedGoal(goal.id)}
                activeOpacity={0.7}
                className={`flex-row items-center justify-between rounded-[24px] border-2 p-5 ${
                  selectedGoal === goal.id
                    ? 'border-[#21C45D] bg-[#21C45D10]'
                    : 'border-transparent bg-white/5'
                }`}>
                <View className="flex-1 flex-row items-center">
                  <View
                    className={`h-12 w-12 items-center justify-center rounded-xl ${selectedGoal === goal.id ? 'bg-[#21C45D]' : 'bg-white/10'}`}>
                    {goal.type === 'material' ? (
                      <MaterialCommunityIcons
                        name={goal.icon}
                        size={24}
                        color={selectedGoal === goal.id ? '#0f172A' : '#21C45D'}
                      />
                    ) : (
                      <Feather
                        name={goal.icon}
                        size={24}
                        color={selectedGoal === goal.id ? '#0f172A' : '#21C45D'}
                      />
                    )}
                  </View>
                  <View className="ml-4 flex-1">
                    <Text className="text-lg font-bold text-white">{goal.title}</Text>
                    {goal.description && (
                      <Text className="mt-1 text-xs leading-4 text-[#21C45D]">
                        {goal.description}
                      </Text>
                    )}
                  </View>
                </View>
                {selectedGoal === goal.id && (
                  <View className="rounded-full bg-[#21C45D] p-1">
                    <Feather name="check" size={12} color="#0f172A" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Next Button */}
          <View className="mt-auto pt-10">
            <TouchableOpacity
              onPress={() => navigation.navigate('Frequency')}
              activeOpacity={0.8}
              className="h-16 items-center justify-center rounded-2xl bg-[#21C45D] shadow-lg shadow-green-500/40">
              <Text className="text-lg font-bold text-[#0f172A]">Davom etish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
