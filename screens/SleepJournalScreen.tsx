import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppTabScreenProps, RootStackParamList } from 'types/navigation.interface';

export default function SleepJournalScreen({ navigation }: AppTabScreenProps<'Uyqu'>) {
  const [sleepTime, setSleepTime] = useState('22:00');
  const [wakeHour, setWakeHour] = useState(7);
  const [wakeMinute, setWakeMinute] = useState(30);
  const [quality, setQuality] = useState("O'rtacha");
  const [wokeUpAtNight, setWokeUpAtNight] = useState(true);
  
  const sleepOptions = ['21:00', '22:00', '23:00', '00:00', '01:00'];
  const qualities = [
    { label: 'Yomon', emoji: '☹️' },
    { label: "O'rtacha", emoji: '😐' },
    { label: 'Yaxshi', emoji: '😀' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <BackBtn navigation={navigation as any} />
        <Text className="mr-10 flex-1 text-center text-lg font-bold text-white">Uyqu jurnali</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 90 }}
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View className="mt-6">
          <Text className="text-3xl font-bold leading-tight text-white">
            Kecha qanday{'\n'}
            <Text className="text-[#18da61]">uxladingiz?</Text>
          </Text>
        </View>

        {/* Uxlash vaqti */}
        <View className="mt-6">
          <Text className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
            Uxlash vaqti
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {sleepOptions.map((time) => (
              <TouchableOpacity
                key={time}
                onPress={() => setSleepTime(time)}
                className={`mr-3 h-14 w-24 items-center justify-center rounded-3xl border ${
                  sleepTime === time
                    ? 'border-[#18da61] bg-[#18da61]'
                    : 'border-white/5 bg-[#121b18]'
                }`}>
                <Text
                  className={`text-base font-bold ${sleepTime === time ? 'text-[#0a1210]' : 'text-white'}`}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Uyg'onish vaqti */}
        <View className="mt-6">
          <Text className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
            Uyg'onish vaqti
          </Text>
          <View className="items-center rounded-[40px] border border-white/5 bg-[#121b18] p-8">
            <View className="flex-row items-baseline">
              <Text className="text-7xl font-black text-white">
                {String(wakeHour).padStart(2, '0')}:{String(wakeMinute).padStart(2, '0')}
              </Text>
              <Text className="ml-2 text-xl font-bold text-[#18da61]">AM</Text>
            </View>

            <View className="mt-6 flex-row gap-x-6">
              <TouchableOpacity
                onPress={() => setWakeMinute((prev) => (prev === 0 ? 55 : prev - 5))}
                className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Feather name="minus" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setWakeMinute((prev) => (prev === 55 ? 0 : prev + 5))}
                className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Feather name="plus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Uyqu sifati */}
        <View className="mt-6">
          <Text className="mb-6 text-center text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
            Uyqu sifati
          </Text>
          <View className="flex-row items-center justify-around rounded-[40px] border border-white/5 bg-[#121b18] py-8">
            {qualities.map((item) => (
              <TouchableOpacity
                key={item.label}
                onPress={() => setQuality(item.label)}
                className="items-center">
                <View
                  className={`h-20 w-20 items-center justify-center ${
                    quality === item.label ? 'rounded-full border-2 border-[#18da61]' : ''
                  }`}>
                  <Text className="text-4xl">{item.emoji}</Text>
                </View>
                <Text
                  className={`mt-3 text-xs font-bold ${
                    quality === item.label ? 'text-[#18da61]' : 'text-gray-500'
                  }`}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tunda uyg'ondingizmi */}
        <View className="mt-6 flex-row items-center justify-between rounded-3xl border border-white/5 bg-[#121b18] p-6">
          <View className="flex-1 flex-row items-center">
            <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-[#18da61]/10">
              <MaterialCommunityIcons name="moon-waning-crescent" size={24} color="#18da61" />
            </View>
            <Text className="text-base font-medium text-white">Tunda uyg'ondingizmi?</Text>
          </View>
          <Switch
            value={wokeUpAtNight}
            onValueChange={setWokeUpAtNight}
            trackColor={{ false: '#334155', true: '#18da61' }}
            thumbColor={'#fff'}
          />
        </View>

        {/* Button */}
        <GreenBtn
          text="Hisoblash"
          className="mt-6 bg-white"
          onPress={() => navigation.navigate('SleepAnalysis', { sessionId: 'temp' })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
