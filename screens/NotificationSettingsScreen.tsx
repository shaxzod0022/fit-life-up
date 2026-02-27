import React, { useState } from 'react';
import { View, Text, Switch, SafeAreaView, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import BackBtn from 'components/helpers/BackBtn';

export default function NotificationSettingsScreen({ navigation }: any) {
  const [reminders, setReminders] = useState(true);
  const [nutrition, setNutrition] = useState(true);
  const [streaks, setStreaks] = useState(true);
  const [news, setNews] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="mr-7 flex-1 text-center text-xl font-bold text-white">
          Bildirishnoma sozlamalari
        </Text>
      </View>

      <ScrollView className="mt-4 flex-1 px-6">
        {/* Section 1 */}
        <Text className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
          Kunlik faollik
        </Text>
        <View className="mb-8 overflow-hidden rounded-3xl bg-[#1e293b]">
          <ToggleItem
            icon={<Feather name="activity" size={20} color="#18da61" />}
            label="Mashg'ulot eslatmalari"
            value={reminders}
            onValueChange={setReminders}
          />
          <ToggleItem
            icon={<MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#18da61" />}
            label="Ovqatlanish bo'yicha eslatmalar"
            value={nutrition}
            onValueChange={setNutrition}
          />
          <ToggleItem
            icon={<Ionicons name="flame-outline" size={20} color="#18da61" />}
            label="Streak va yutuqlar"
            value={streaks}
            onValueChange={setStreaks}
            isLast
          />
        </View>

        {/* Section 2 */}
        <Text className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
          Hamjamiyat va yangiliklar
        </Text>
        <View className="mb-6 overflow-hidden rounded-3xl bg-[#1e293b]">
          <ToggleItem
            icon={<Feather name="lightbulb" size={20} color="#18da61" />}
            label="Yangiliklar va maslahatlar"
            value={news}
            onValueChange={setNews}
            isLast
          />
        </View>

        {/* Info Text */}
        <Text className="px-1 text-sm leading-5 text-gray-500">
          Eslatma: Ba'zi muhim bildirishnomalar (xavfsizlik va hisob holati) ushbu sozlamalarga
          qaramasdan yuborilishi mumkin.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const ToggleItem = ({ icon, label, value, onValueChange, isLast }: any) => (
  <View className={`flex-row items-center p-5 ${!isLast ? 'border-b border-white/5' : ''}`}>
    <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#18da61]/10">{icon}</View>
    <Text className="ml-4 flex-1 text-base font-medium text-white">{label}</Text>
    <Switch
      trackColor={{ false: '#334155', true: '#18da61' }}
      thumbColor={'#fff'}
      onValueChange={onValueChange}
      value={value}
    />
  </View>
);
