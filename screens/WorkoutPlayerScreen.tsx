import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

export default function WorkoutPlayerScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'WorkoutPlayer'>;
}) {
  const [seconds, setSeconds] = useState(45);
  const [isActive, setIsActive] = useState(true);

  // Taymer mantiqi
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Top Header & Progress */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="text-xl font-bold text-white">Mashq nomi</Text>
        <TouchableOpacity>
          <Ionicons name="information-circle-outline" size={28} color="#18da61" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }} // Pastda qo'shimcha joy qolishi uchun
      >
        <View className="px-6 pt-4">
          <View className="mb-2 flex-row justify-between">
            <Text className="text-[10px] font-bold uppercase tracking-widest text-[#18da61]">
              Mashg'ulot jarayoni
            </Text>
            <Text className="text-[10px] font-bold text-[#18da61]">66%</Text>
          </View>
          <View className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <View style={{ width: '66%' }} className="h-full bg-[#18da61]" />
          </View>
        </View>

        {/* Exercise Image Card */}
        <View className="mt-8 items-center px-6">
          <View className="relative h-80 w-full overflow-hidden rounded-[40px] border border-white/5 shadow-2xl">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' }}
              className="h-full w-full"
            />
            {/* Overlay Gradient Placeholder */}
            <View className="absolute bottom-0 w-full bg-black/40 p-6">
              <Text className="text-center text-2xl font-black text-white">
                Gantel bilan o'tirish
              </Text>
              <Text className="mt-1 text-center font-bold text-[#18da61]">
                Oyoq va dumba mushaklari
              </Text>
            </View>
          </View>
        </View>

        {/* Timer Section */}
        <View className="mt-8 items-center">
          <Text style={styles.timerGlow} className="text-7xl font-black text-white">
            {formatTime(seconds)}
          </Text>
          <Text className="mt-2 text-xs font-bold uppercase tracking-[3px] text-gray-500">
            Qolgan vaqt
          </Text>
        </View>

        {/* Reps and Sets Info */}
        <View className="mt-10 flex-row justify-between gap-x-4 px-6">
          <View className="flex-1 items-center rounded-3xl border border-white/5 bg-[#121b18] p-6">
            <Text className="text-3xl font-black text-white">12</Text>
            <Text className="mt-1 text-[10px] font-bold uppercase text-gray-500">Takrorlash</Text>
          </View>
          <View className="flex-1 items-center rounded-3xl border border-white/5 bg-[#121b18] p-6">
            <View className="flex-row items-baseline">
              <Text className="text-3xl font-black text-[#18da61]">2</Text>
              <Text className="text-xl font-bold text-gray-500"> / 3</Text>
            </View>
            <Text className="mt-1 text-[10px] font-bold uppercase text-gray-500">To'plam</Text>
          </View>
        </View>

        {/* Mini Progress Indicators */}
        <View className="mt-8 flex-row justify-center gap-x-2">
          <View className="h-1.5 w-12 rounded-full bg-[#18da61]" />
          <View className="h-1.5 w-12 rounded-full bg-[#18da61]" />
          <View className="h-1.5 w-12 rounded-full bg-white/10" />
        </View>

        {/* Controls */}
        <View className="mt-10 gap-y-4 px-6">
          <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            className="flex-row items-center justify-center py-2">
            <Feather name={isActive ? 'pause-circle' : 'play-circle'} size={20} color="gray" />
            <Text className="ml-2 font-bold text-gray-400">Vaqtincha to'xtatish</Text>
          </TouchableOpacity>

          <GreenBtn
            text="Keyingisi"
            icon={<Feather name="arrow-right" size={22} color="#0a1210" />}
            textClassName="uppercase tracking-widest"
          />

          <GreenBtn
            text="Yakunlash"
            className="border border-slate-700 bg-transparent shadow-none"
            textClassName="text-white uppercase tracking-widest"
          />

          {/* Next Up Preview */}
          <View className="mt-4 flex-row items-center rounded-3xl border border-white/5 bg-[#121b18] p-4">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' }}
              className="h-12 w-12 rounded-xl"
            />
            <View className="ml-4 flex-1">
              <Text className="text-[10px] font-black uppercase tracking-tighter text-[#18da61]">
                Navbatda
              </Text>
              <Text className="text-base font-bold text-white">Planka (60 sekunda)</Text>
            </View>
            <MaterialCommunityIcons name="skip-next" size={28} color="gray" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timerGlow: {
    textShadowColor: 'rgba(24, 218, 97, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
});
