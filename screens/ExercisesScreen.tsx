import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

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

export default function ExercisesScreen() {
  const [activeTab, setActiveTab] = useState('rehab');

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="mt-6 flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-bold uppercase tracking-widest text-[#22C55E]">
              FITLIFEUP
            </Text>
            <Text className="text-3xl font-bold text-white">Mashqlar</Text>
          </View>
          <TouchableOpacity className="rounded-full border border-white/10 bg-white/5 p-3">
            <Feather name="search" size={20} color="#22C55E" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-6 flex-row">
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
              className="flex-row items-center rounded-[32px] border border-white/10 bg-white/5 p-4">
              <View className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-800">
                {/* Mashq rasmi uchun placeholder */}
                <View className="flex-1 items-center justify-center">
                  <MaterialCommunityIcons name="human-stretching" size={40} color="#22C55E" />
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

        <View className="mb-6 mt-10 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">Hozirgi mashq</Text>
          <View className="flex-row items-center rounded-full bg-[#22C55E20] px-3 py-1">
            <View className="mr-2 h-2 w-2 rounded-full bg-[#22C55E]" />
            <Text className="text-[10px] font-bold uppercase text-[#22C55E]">FAOL</Text>
          </View>
        </View>

        <View className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-2">
          <View className="flex-row items-center rounded-2xl border border-[#22C55E30] bg-[#0a121080] p-4">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-[#13EC8033]">
              <Text className="text-lg font-bold text-[#22C55E]">1</Text>
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-base font-bold text-white">Tizzani bukib-yozish</Text>
              <Text className="mt-1 text-xs text-slate-500">15 marta x 3 to'plam</Text>
            </View>
            <Text className="text-lg font-bold text-[#22C55E]">00:45</Text>
          </View>

          <View className="flex-row items-center p-4 opacity-40">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Text className="text-lg font-bold text-white">2</Text>
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-base font-bold text-white">Kvadritsepsni qisqartirish</Text>
              <Text className="mt-1 text-xs text-slate-500">20 marta x 3 to'plam</Text>
            </View>
            <Feather name="lock" size={20} color="#94A3B8" />
          </View>
        </View>

        <Text className="mb-10 text-center text-sm italic leading-4 text-slate-500">
          Diqqat: Mashqlarni bajarishdan oldin shifokor bilan maslahatlashing. Og'riq sezsangiz,
          darhol to'xtating.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
