import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppTabScreenProps } from 'types/navigation.interface';

interface ExerciseCategory {
  id: string;
  title: string;
}

interface Workout {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
}

const categories: ExerciseCategory[] = [
  { id: 'all', title: 'Barchasi' },
  { id: 'rehab', title: 'Reabilitatsiya' },
  { id: 'cardio', title: 'Kardio' },
];

const workouts: Workout[] = [
  {
    id: '1',
    title: 'Tizza reabilitatsiyasi',
    duration: '15 daqiqa',
    difficulty: 'Oson',
  },
  {
    id: '2',
    title: 'Bel reabilitatsiyasi',
    duration: '20 daqiqa',
    difficulty: "O'rta",
  },
  {
    id: '3',
    title: 'Yelka reabilitatsiyasi',
    duration: '12 daqiqa',
    difficulty: 'Oson',
  },
];

export default function ExercisesScreen({ navigation }: AppTabScreenProps<'Mashqlar'>) {
  const [activeTab, setActiveTab] = useState('rehab');

  const handleWorkoutPress = (workoutId: string) => {
    navigation.navigate('Workouts', { exerciseId: workoutId });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}>
        <View className="mt-6 flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-bold uppercase tracking-widest text-[#22C55E]">
              FITLIFEUP
            </Text>
            <Text className="text-3xl font-bold text-white">Mashqlar</Text>
          </View>
        </View>

        <Text className="mt-6 text-center text-sm italic leading-4 text-slate-500">
          Diqqat: Mashqlarni bajarishdan oldin shifokor bilan maslahatlashing. Og'riq sezsangiz,
          darhol to'xtating.
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="my-6 flex-row">
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setActiveTab(cat.id)}
              className={`mr-3 rounded-full border px-6 py-2.5 ${
                activeTab === cat.id
                  ? 'border-[#22C55E] bg-[#22C55E]'
                  : 'border-white/10 bg-white/5'
              }`}>
              <Text
                className={`font-bold ${activeTab === cat.id ? 'text-[#0a1210]' : 'text-slate-400'}`}>
                {cat.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="gap-y-4">
          {workouts.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              onPress={() => handleWorkoutPress(workout.id)}
              className="flex-row items-center rounded-[32px] border border-white/10 bg-white/5 p-4">
              <View className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-800">
                {/* Mashq rasmi uchun placeholder */}
                <View className="flex-1 items-center justify-center">
                  <MaterialCommunityIcons name="human-greeting" size={40} color="#22C55E" />
                </View>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-lg font-bold leading-6 text-white">{workout.title}</Text>
                <View className="mt-2 flex-row items-center">
                  <Feather name="clock" size={14} color="#22C55E" />
                  <Text className="ml-1 mr-4 text-xs text-slate-400">{workout.duration}</Text>
                  <MaterialCommunityIcons name="chart-line" size={14} color="#22C55E" />
                  <Text className="ml-1 text-xs text-slate-400">{workout.difficulty}</Text>
                </View>
              </View>
              <Feather name="chevron-right" size={24} color="#94A3B8" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
