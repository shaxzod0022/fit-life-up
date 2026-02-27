import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import GreenBtn from 'components/helpers/GreenBtn';

// Navigation tipini o'zingizning RootStackParamList'ga qarab to'g'rilab oling
type Props = StackScreenProps<RootStackParamList, 'WorkoutSummary'>;

export default function WorkoutSummaryScreen({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Trophy & XP Section */}
        <View className="mt-12 items-center justify-center">
          <View className="relative">
            {/* XP Badge */}
            <View className="absolute -right-8 -top-4 z-10 rounded-full bg-[#18da61] px-4 py-1.5 shadow-lg shadow-green-500/50">
              <Text className="text-xs font-black text-[#0a1210]">+50 XP</Text>
            </View>

            {/* Trophy Icon with Glow */}
            <View
              style={styles.trophyGlow}
              className="h-32 w-32 items-center justify-center rounded-full border-2 border-[#18da61]/30 bg-[#121b18]">
              <Ionicons name="trophy-outline" size={60} color="#18da61" />
            </View>
          </View>

          <Text className="mt-10 px-6 text-center text-3xl font-black text-white">
            Mashg'ulot yakunlandi
          </Text>
          <Text className="mt-2 px-10 text-center text-lg font-medium text-[#18da61]">
            Ajoyib natija! Siz bugun o'zingizni yengdingiz.
          </Text>
        </View>

        {/* Stats Grid */}
        <View className="mt-10 flex-row gap-x-4 px-6">
          {/* Duration Card */}
          <View className="flex-1 items-center rounded-[32px] border border-white/5 bg-[#121b18] p-6">
            <View className="mb-3 h-10 w-10 items-center justify-center rounded-full bg-[#18da61]/10">
              <MaterialCommunityIcons name="timer-outline" size={24} color="#18da61" />
            </View>
            <Text className="text-3xl font-black text-white">35</Text>
            <Text className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Daqiqa
            </Text>
          </View>

          {/* Calories Card */}
          <View className="flex-1 items-center rounded-[32px] border border-white/5 bg-[#121b18] p-6">
            <View className="mb-3 h-10 w-10 items-center justify-center rounded-full bg-[#18da61]/10">
              <MaterialCommunityIcons name="fire" size={24} color="#18da61" />
            </View>
            <Text className="text-3xl font-black text-white">280</Text>
            <Text className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Kcal
            </Text>
          </View>
        </View>

        {/* Heart Rate Card */}
        <View className="mx-6 mt-4 flex-row items-center justify-between rounded-[32px] border border-white/5 bg-[#121b18] p-4">
          <View className="flex-row items-center">
            <View className="mr-4 h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
              <Ionicons name="heart" size={24} color="#ef4444" />
            </View>
            <Text className="text-base font-medium text-white">O'rtacha yurak urishi</Text>
          </View>
          <View className="flex-row items-baseline">
            <Text className="text-xl font-black text-white">142</Text>
            <Text className="ml-1 text-xs uppercase text-gray-500">bpm</Text>
          </View>
        </View>

        {/* Level & Progress Section */}
        <View className="mt-10 px-6">
          <Text className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Daraja 12
          </Text>

          <Text className="mb-1 text-xl font-black text-[#18da61]">Master Sportchi</Text>

          <Text className="mb-1 text-[10px] font-bold text-gray-400">
            Keyingi darajagacha 120 XP qoldi
          </Text>
          <View className="h-3 w-full overflow-hidden rounded-full bg-white/5">
            <View style={{ width: '70%' }} className="h-full rounded-full bg-[#18da61]" />
          </View>
        </View>

        {/* Buttons Section */}
        <View className="mt-12 space-y-4 px-6">
          <GreenBtn text="Davom etish" onPress={() => navigation.goBack()} />

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center justify-center py-4">
            <Ionicons name="share-outline" size={20} color="gray" />
            <Text className="ml-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              Natijani ulashish
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  trophyGlow: {
    shadowColor: '#18da61',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 20, // Android uchun
  },
});
