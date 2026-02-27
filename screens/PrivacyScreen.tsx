import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Privacy'>;

export default function PrivacyPolicyScreen({ navigation }: { navigation: NavigationProp }) {
  // Siyosat bo'limlari uchun kichik komponent
  const PolicySection = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    children: React.ReactNode;
  }) => (
    <View className="mb-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
      <View className="mb-4 flex-row items-center">
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
          Maxfiylik siyosati
        </Text>
      </View>

      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}>
        {/* Intro */}
        <Text className="mb-8 text-sm italic leading-6 text-slate-400">
          Oxirgi yangilanish: 19-fevral, 2026-yil. FitLifeUp foydalanuvchilarning shaxsiy va sog‘liq
          bilan bog‘liq ma’lumotlarini himoya qilishni ustuvor deb biladi.
        </Text>

        {/* 1. Umumiy qoidalar */}
        <PolicySection title="Umumiy qoidalar" icon="shield-check">
          <Text className="text-sm leading-6 text-slate-300">
            Ushbu siyosat FitLifeUp mobil ilovasidan foydalanishda to‘planadigan ma’lumotlarga
            nisbatan qo‘llaniladi.
          </Text>
        </PolicySection>

        {/* 2. Qanday ma’lumotlarni yig‘amiz */}
        <PolicySection title="To'planadigan ma'lumotlar" icon="database">
          {[
            'Telefon raqamingiz',
            'Ismingiz (agar kiritilgan bo‘lsa)',
            'Yosh, jins, bo‘y, vazn',
            'Mashg‘ulot va ovqatlanish ma’lumotlari',
            'Ilova ichidagi faollik statistikasi',
          ].map((item, index) => (
            <View key={index} className="mb-2 flex-row items-center">
              <View className="mr-3 h-1.5 w-1.5 rounded-full bg-[#21C45D]" />
              <Text className="text-sm text-slate-300">{item}</Text>
            </View>
          ))}
          <View className="mt-3 rounded-xl border border-red-500/20 bg-red-500/10 p-3">
            <Text className="text-center text-xs font-bold italic text-red-400">
              * Biz karta ma’lumotlarini saqlamaymiz.
            </Text>
          </View>
        </PolicySection>

        {/* 3. Foydalanish maqsadi */}
        <PolicySection title="Foydalanish maqsadi" icon="bullseye-arrow">
          <Text className="text-sm leading-6 text-slate-300">
            To‘plangan ma’lumotlar shaxsiylashtirilgan mashg‘ulot rejasini tuzish, kaloriya
            hisoblash va ilova funksiyalarini yaxshilash maqsadida ishlatiladi.
          </Text>
        </PolicySection>

        {/* 4. Ma'lumotlarni himoya qilish */}
        <PolicySection title="Ma’lumotlarni himoya qilish" icon="lock">
          <Text className="text-sm leading-6 text-slate-300">
            Barcha ma’lumotlar shifrlangan serverlarda saqlanadi va HTTPS protokoli orqali xavfsiz
            uzatiladi. Kirish qat'iy cheklangan.
          </Text>
        </PolicySection>

        {/* 5. Tibbiy ogohlantirish - MUHIM */}
        <View className="mb-8 rounded-[24px] border border-orange-500/30 bg-orange-500/10 p-5">
          <View className="mb-3 flex-row items-center">
            <Feather name="alert-triangle" size={20} color="#F97316" />
            <Text className="ml-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              Tibbiy ogohlantirish
            </Text>
          </View>
          <Text className="text-xs leading-5 text-slate-300">
            FitLifeUp ilovasi tibbiy maslahat o‘rnini bosmaydi. Reabilitatsiya mashg‘ulotlari umumiy
            tavsiya bo‘lib, shifokor maslahatini almashtirmaydi.
          </Text>
        </View>

        {/* Footer info */}
        <Text className="mb-10 text-center text-[10px] uppercase tracking-[2px] text-slate-500">
          FitLifeUp v1.0.0 MVP
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
