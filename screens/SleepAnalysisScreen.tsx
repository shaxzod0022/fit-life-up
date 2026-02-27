import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackBtn from 'components/helpers/BackBtn';

export default function SleepAnalysisScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="text-lg font-bold text-white">Uyqu sifati tahlili</Text>
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Ionicons name="share-social-outline" size={24} color="#18da61" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}>
        {/* Central Circular Progress */}
        <View className="mt-8 items-center justify-center">
          <View className="h-56 w-56 items-center justify-center rounded-full border-[10px] border-[#18da61]">
            <View className="items-center">
              <Text className="text-6xl font-black text-white">
                87<Text className="text-3xl text-[#18da61]">%</Text>
              </Text>
              <Text className="mt-1 text-sm font-bold uppercase tracking-[3px] text-[#18da61]">
                Yaxshi
              </Text>
            </View>
          </View>

          <Text className="mt-10 px-8 text-center text-base leading-6 text-gray-400">
            Sizning uyqungiz bugun o'rtachadan{' '}
            <Text className="font-bold text-white">12% yuqori</Text> natija ko'rsatdi.
          </Text>
        </View>

        {/* Indicators Section */}
        <View className="mt-12">
          <Text className="mb-6 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
            Ko'rsatkichlar tahlili
          </Text>

          <AnalysisBar label="Davomiylik" percent={90} />
          <AnalysisBar label="Vaqt mosligi" percent={85} />
          <AnalysisBar label="Subyektiv baho" percent={100} />
        </View>

        {/* Scientific Recommendation */}
        <View className="mt-8 rounded-[32px] border-l-4 border-[#18da61] bg-[#121b18] p-6">
          <View className="mb-3 flex-row items-center">
            <Ionicons name="bulb-outline" size={20} color="#18da61" />
            <Text className="ml-2 text-lg font-bold text-[#18da61]">Ilmiy tavsiya</Text>
          </View>
          <Text className="text-sm leading-6 text-gray-300">
            22:00–00:00 oralig'ida uxlash organizm uchun optimal hisoblanadi. Sizning melatonin
            darajangiz ushbu vaqtda eng yuqori nuqtaga chiqadi.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Progress Bar Sub-component
const AnalysisBar = ({ label, percent }: { label: string; percent: number }) => (
  <View className="mb-6 rounded-[24px] border border-white/5 bg-[#121b18] p-5">
    <View className="mb-3 flex-row items-center justify-between">
      <Text className="text-base font-medium text-white">{label}</Text>
      <Text className="text-base font-bold text-[#18da61]">{percent}%</Text>
    </View>
    <View className="h-2 w-full overflow-hidden rounded-full bg-white/5">
      <View style={{ width: `${percent}%` }} className="h-full rounded-full bg-[#18da61]" />
    </View>
  </View>
);
