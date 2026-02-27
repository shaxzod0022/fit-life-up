import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import AiIcon from '../assets/icons/ai-icon.svg';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Frequency'>;

interface FrequencyOption {
  id: string;
  title: string;
  subtitle: string;
  range: string;
  icon: any;
  iconType: 'material' | 'font-awesome';
}

const frequencies: FrequencyOption[] = [
  {
    id: 'low',
    title: 'Past',
    range: '(0–1)',
    subtitle: 'Yangi boshlanuvchilar uchun',
    icon: 'moon',
    iconType: 'material',
  },
  {
    id: 'medium',
    title: 'O‘rtacha',
    range: '(2–4)',
    subtitle: 'Faol turmush tarzi',
    icon: 'running',
    iconType: 'font-awesome',
  },
  {
    id: 'high',
    title: 'Yuqori',
    range: '(5+)',
    subtitle: 'Professional yondashuv',
    icon: 'dumbbell',
    iconType: 'font-awesome',
  },
];

export default function FrequencyScreen({ navigation }: { navigation: NavigationProp }) {
  const [selected, setSelected] = useState<string>('medium');

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-6">
          {/* Header */}
          <View className="mb-8 flex-row items-center justify-between">
            <BackBtn navigation={navigation} />
            <View className="flex-row gap-x-1">
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-5 rounded-full bg-[#21C45D]" />
            </View>
          </View>

          {/* Titles */}
          <View className="mb-8">
            <Text className="mb-4 text-3xl font-bold text-white">Mashg‘ulot chastotasi?</Text>
            <Text className="text-base leading-6 text-slate-400">
              Haftasiga necha marta shug‘ullanishni rejalashtiryapsiz? Bu sizning reabilitatsiya
              tezligingizga ta'sir qiladi.
            </Text>
          </View>

          {/* Frequency Options */}
          <View className="gap-y-4">
            {frequencies.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelected(item.id)}
                activeOpacity={0.7}
                className={`flex-row items-center justify-between rounded-[24px] border-2 p-5 ${
                  selected === item.id
                    ? 'border-[#21C45D] bg-[#21C45D10]'
                    : 'border-transparent bg-white/5'
                }`}>
                <View className="flex-1 flex-row items-center">
                  <View
                    className={`h-12 w-12 items-center justify-center rounded-xl ${selected === item.id ? 'bg-[#21C45D]' : 'bg-white/10'}`}>
                    {item.iconType === 'material' ? (
                      <MaterialCommunityIcons
                        name={item.icon as any}
                        size={24}
                        color={selected === item.id ? '#0a1210' : '#94A3B8'}
                      />
                    ) : (
                      <FontAwesome5
                        name={item.icon}
                        size={20}
                        color={selected === item.id ? '#0a1210' : '#94A3B8'}
                      />
                    )}
                  </View>
                  <View className="ml-4">
                    <Text className="text-lg font-bold text-white">
                      {item.title} {item.range}
                    </Text>
                    <Text className="mt-1 text-xs text-slate-500">{item.subtitle}</Text>
                  </View>
                </View>

                {/* Radio Circle */}
                <View
                  className={`h-6 w-6 items-center justify-center rounded-full border-2 ${selected === item.id ? 'border-[#21C45D]' : 'border-slate-700'}`}>
                  {selected === item.id && <View className="h-3 w-3 rounded-full bg-[#21C45D]" />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* AI Insight Card */}
          <View className="mt-8 rounded-[32px] border border-[#21C45D20] bg-[#21C45D10] p-5">
            <View className="mb-3 flex-row items-center">
              <AiIcon width={25} height={25} />
              <Text className="ml-2 text-xs font-bold uppercase tracking-widest text-[#21C45D]">
                AI Tushunchalar
              </Text>
            </View>
            <Text className="text-sm italic leading-5 text-slate-400">
              "Haftasiga 3 marta mashg'ulot o'tkazish reabilitatsiya samaradorligini 40% ga
              oshiradi."
            </Text>
          </View>

          {/* Action Button */}
          <View className="mt-auto pt-8">
            <GreenBtn
              text="Rejani hisoblash"
              icon={<Feather name="arrow-right" size={20} color="#0a1210" />}
              onPress={() => navigation.replace('Main')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
