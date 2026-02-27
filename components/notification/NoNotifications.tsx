import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function NoNotifications({ navigation }: any) {
  return (
    <View className="flex-1 bg-[#0a1210]">
      <View className="flex-1 items-center justify-center px-6">
        {/* Central Illustration Placeholder */}
        <View className="relative h-64 w-64 items-center justify-center">
          {/* Background Glows/Circles */}
          <View className="absolute h-48 w-48 rounded-full bg-[#18da61]/5" />
          <View className="absolute -top-2 right-10 h-6 w-6 rounded-full bg-[#18da61]/20" />
          <View className="absolute bottom-10 left-4 h-4 w-4 items-center justify-center rounded-full border border-[#18da61]/40">
            <View className="h-1.5 w-1.5 rounded-full bg-[#18da61]" />
          </View>

          {/* Bell Icon Container */}
          <View className="h-32 w-32 items-center justify-center rounded-[40px] border border-white/5 bg-[#1e293b] shadow-2xl">
            <View className="relative">
              <Ionicons name="notifications-off" size={60} color="#18da61" />
              {/* Slash line manually if needed, but 'notifications-off' already has it */}
            </View>
          </View>
        </View>

        {/* Text Content */}
        <View className="mt-8 items-center">
          <Text className="text-center text-3xl font-bold leading-tight text-white">
            Hozircha bildirishnomalar yo‘q
          </Text>
          <Text className="mt-4 text-center text-base leading-6 text-gray-400">
            Hamma narsa nazorat ostida! Yangi bildirishnomalar va takliflar shu yerda ko'rinadi.
          </Text>
        </View>
      </View>

      {/* Bottom Action Button */}
      <View className="px-6 pb-10">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation?.replace('Main')}
          className="h-16 flex-row items-center justify-center rounded-3xl bg-[#18da61] shadow-lg shadow-green-500/30">
          <Feather name="home" size={20} color="#0a1210" />
          <Text className="ml-2 text-lg font-bold text-[#0a1210]">Bosh sahifaga qaytish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
