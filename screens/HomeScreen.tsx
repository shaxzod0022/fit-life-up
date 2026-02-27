import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { AppTabScreenProps } from 'types/navigation.interface';

export default function HomeScreen({ navigation }: AppTabScreenProps<'Asosiy'>) {
  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}>
        {/* Header: User Info */}
        <View className="flex-row items-center justify-between">
          <View className="w-[60%]">
            <Text className="text-sm font-bold text-[#22C55E]">Xush kelibsiz!</Text>
            <Text className="text-2xl font-bold text-white">Salom, Avazbek</Text>
          </View>
          <View className="flex-row items-center gap-x-3">
            <View className="flex-row items-center rounded-full border border-[#22C55E30] bg-[#22C55E15] px-3 py-1.5">
              <MaterialCommunityIcons name="fire" size={16} color="#22C55E" />
              <Text className="ml-1 font-bold text-[#22C55E]">7 kun</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation?.navigate('Notifications')}
              className="rounded-full bg-white/10 p-2.5">
              <Ionicons name="notifications" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6">
          <View className="z-10 w-[60%]">
            <View className="mb-3 self-start rounded-md bg-[#22C55E] px-2 py-1">
              <Text className="text-[10px] font-bold text-[#0a1210]">TAVSIYA ETILADI</Text>
            </View>
            <Text className="mb-1 text-xs text-slate-400">15 daqiqa • O'rtacha</Text>
            <Text className="mb-2 text-xl font-bold text-white">Bugungi mashg'ulot</Text>
            <Text className="mb-5 text-xs leading-5 text-slate-400">
              Umurtqa pog'onasini tiklash uchun reabilitatsiya kompleksi
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation?.navigate('Mashqlar')}
            className="w-full flex-row items-center justify-center rounded-2xl bg-[#22C55E] py-3">
            <Ionicons name="play" size={18} color="#0a1210" />
            <Text className="ml-2 font-bold text-[#0a1210]">Boshlash</Text>
          </TouchableOpacity>
          <View className="absolute bottom-0 right-[-20] opacity-40">
            <MaterialCommunityIcons name="human-walker" size={200} color="#22C55E" />
          </View>
        </View>

        <View className="mt-6 flex-row gap-x-4">
          <View className="flex-1 rounded-[28px] border border-white/10 bg-white/5 p-5">
            <View className="mb-4 self-start rounded-lg bg-orange-500/20 p-2">
              <MaterialCommunityIcons name="lightning-bolt" size={20} color="#F97316" />
            </View>
            <Text className="text-sm text-slate-400">Kaloriyalar</Text>
            <Text className="mt-1 text-xl font-bold text-white">
              1,240 <Text className="text-xs text-slate-500">/ 2000 kcal</Text>
            </Text>
            <View className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <View className="h-full w-[60%] bg-orange-500" />
            </View>
          </View>

          <View className="flex-1 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 p-5">
            <View className="relative items-center justify-center">
              <View className="h-16 w-16 items-center justify-center rounded-full border-4 border-white/10">
                <View className="absolute h-16 w-16 rotate-45 rounded-full border-4 border-[#22C55E] border-t-transparent" />
                <Text className="text-lg font-bold text-white">82</Text>
              </View>
            </View>
            <Text className="mt-3 text-sm text-slate-400">Tiklanish</Text>
            <Text className="mt-1 text-[10px] font-bold text-[#22C55E]">A'LO HOLATDA</Text>
          </View>
        </View>

        {/* Health Analysis Section */}
        <View className="mb-10 mt-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white">Salomatlik tahlili</Text>
            <TouchableOpacity>
              <Text className="text-xs text-[#22C55E]">Hammasini ko'rish</Text>
            </TouchableOpacity>
          </View>

          {/* Heart Rate */}
          <View className="mb-6 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="rounded-xl bg-blue-500/20 p-2">
                <Ionicons name="heart" size={20} color="#3B82F6" />
              </View>
              <View className="ml-4">
                <Text className="font-bold text-white">Yurak urishi</Text>
                <Text className="text-[10px] text-slate-500">So'nggi o'lchov: 5 daq oldin</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-white">72 BPM</Text>
              <Text className="text-[10px] text-[#22C55E]">Normal</Text>
            </View>
          </View>

          {/* Sleep Quality */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="rounded-xl bg-purple-500/20 p-2">
                <Ionicons name="moon" size={20} color="#A855F7" />
              </View>
              <View className="ml-4">
                <Text className="font-bold text-white">Uyqu sifati</Text>
                <Text className="text-[10px] text-slate-500">Bugun: 7s 45m</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-white">94%</Text>
              <Text className="text-[10px] text-[#22C55E]">A'lo</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
