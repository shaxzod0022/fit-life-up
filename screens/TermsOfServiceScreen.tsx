import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Terms'>;

export default function TermsOfServiceScreen({ navigation }: { navigation: NavigationProp }) {
  const TermSection = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    children: React.ReactNode;
  }) => (
    <View className="mb-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
      <View className="mb-3 flex-row items-center">
        <View className="rounded-lg bg-[#21C45D20] p-2">
          <MaterialCommunityIcons name={icon} size={20} color="#21C45D" />
        </View>
        <Text className="ml-3 text-lg font-bold text-white">{title}</Text>
      </View>
      {children}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header */}
      <View className="flex-row items-center border-b border-white/5 p-6">
        <BackBtn navigation={navigation} />
        <Text className="mr-10 flex-1 text-center text-lg font-bold text-white">
          Foydalanish shartlari
        </Text>
      </View>

      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}>
        <Text className="mb-8 text-sm italic leading-6 text-slate-400">
          FitLifeUp ilovasidan foydalanish orqali siz quyidagi shartlarga to'liq rozilik bildirasiz.
        </Text>

        {/* 1. Umumiy qoidalar */}
        <TermSection title="Umumiy qoidalar" icon="file-document-outline">
          <Text className="text-sm leading-6 text-slate-300">
            Ushbu shartlar FitLifeUp mobil ilovasining barcha foydalanuvchilari uchun majburiy
            hisoblanadi.
          </Text>
        </TermSection>

        {/* 2. Hisob va xavfsizlik */}
        <TermSection title="Hisob va xavfsizlik" icon="shield-account-outline">
          <Text className="text-sm leading-6 text-slate-300">
            Foydalanuvchi o‘z telefon raqami orqali ro‘yxatdan o‘tadi va hisob xavfsizligi, parollar
            hamda barcha faolliklar uchun shaxsan javobgardir.
          </Text>
        </TermSection>

        {/* 3. Tibbiy mas’uliyat - KRITIK QISM */}
        <View className="mb-6 rounded-[24px] border border-red-500/20 bg-red-500/5 p-5">
          <View className="mb-3 flex-row items-center">
            <View className="rounded-lg bg-red-500/20 p-2">
              <Octicons name="alert" size={18} color="#EF4444" />
            </View>
            <Text className="ml-3 text-lg font-bold text-red-400">Tibbiy mas’uliyat</Text>
          </View>
          <Text className="mb-2 text-sm leading-6 text-slate-300">
            Ilovadagi mashg‘ulot va reabilitatsiya dasturlari umumiy tavsiya bo‘lib, professional
            tibbiy maslahat o‘rnini bosmaydi.
          </Text>
          <Text className="text-sm font-bold text-white">
            Foydalanuvchi o‘z sog‘ligi uchun mustaqil javobgardir.
          </Text>
        </View>

        {/* 4. Noto‘g‘ri foydalanish */}
        <TermSection title="Taqiqlar" icon="block-helper">
          <View className="gap-y-2">
            {[
              'Ilovani zararli maqsadda ishlatish',
              'Tizimni buzishga urinish',
              'Soxta ma’lumot kiritish',
            ].map((text, i) => (
              <View key={i} className="flex-row items-center">
                <Feather name="x-circle" size={14} color="#94A3B8" />
                <Text className="ml-2 text-sm text-slate-400">{text}</Text>
              </View>
            ))}
          </View>
        </TermSection>

        {/* 5. Intellektual mulk */}
        <TermSection title="Intellektual mulk" icon="copyright">
          <Text className="text-sm leading-6 text-slate-300">
            FitLifeUp dizayni, kod, logotiplar va barcha kontent kompaniyaning mutlaq mulki
            hisoblanadi.
          </Text>
        </TermSection>

        {/* 6. Javobgarlikni cheklash */}
        <TermSection title="Javobgarlikni cheklash" icon="gavel">
          <Text className="text-sm italic leading-6 text-slate-300">
            FitLifeUp ilovasidan foydalanish natijasida yuzaga kelgan har qanday sog‘liq bilan
            bog‘liq oqibatlar uchun kompaniya javobgarlikni o'z zimmasiga olmaydi.
          </Text>
        </TermSection>

        <GreenBtn text="Tushunarli" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}
