import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Privacy'>;

export default function PrivacyPolicyScreen({ navigation }: { navigation: NavigationProp }) {
  
  // Siyosat bo'limlari uchun kichik komponent
  const PolicySection = ({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
    <View className="mb-8 bg-white/5 border border-white/10 p-5 rounded-[24px]">
      <View className="flex-row items-center mb-4">
        <View className="bg-[#21C45D20] p-2 rounded-lg">
          <MaterialCommunityIcons name={icon} size={20} color="#21C45D" />
        </View>
        <Text className="text-white font-bold ml-3 text-lg">{title}</Text>
      </View>
      {children}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#0f172A]">      
      {/* Header */}
      <View className="flex-row items-center p-6 border-b border-white/5">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="h-10 w-10 items-center justify-center rounded-full bg-white/10"
        >
          <Feather name="chevron-left" size={24} color="#21C45D" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-bold mr-10">
          Maxfiylik siyosati
        </Text>
      </View>

      <ScrollView 
        className="flex-1 px-6" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {/* Intro */}
        <Text className="text-slate-400 text-sm leading-6 mb-8 italic">
          Oxirgi yangilanish: 19-fevral, 2026-yil. FitLifeUp foydalanuvchilarning shaxsiy va sog‘liq bilan bog‘liq ma’lumotlarini himoya qilishni ustuvor deb biladi.
        </Text>

        {/* 1. Umumiy qoidalar */}
        <PolicySection title="Umumiy qoidalar" icon="shield-check">
          <Text className="text-slate-300 leading-6 text-sm">
            Ushbu siyosat FitLifeUp mobil ilovasidan foydalanishda to‘planadigan ma’lumotlarga nisbatan qo‘llaniladi.
          </Text>
        </PolicySection>

        {/* 2. Qanday ma’lumotlarni yig‘amiz */}
        <PolicySection title="To'planadigan ma'lumotlar" icon="database">
          {[
            'Telefon raqamingiz',
            'Ismingiz (agar kiritilgan bo‘lsa)',
            'Yosh, jins, bo‘y, vazn',
            'Mashg‘ulot va ovqatlanish ma’lumotlari',
            'Ilova ichidagi faollik statistikasi'
          ].map((item, index) => (
            <View key={index} className="flex-row items-center mb-2">
              <View className="h-1.5 w-1.5 rounded-full bg-[#21C45D] mr-3" />
              <Text className="text-slate-300 text-sm">{item}</Text>
            </View>
          ))}
          <View className="mt-3 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
            <Text className="text-red-400 text-xs font-bold text-center italic">
              * Biz karta ma’lumotlarini saqlamaymiz.
            </Text>
          </View>
        </PolicySection>

        {/* 3. Foydalanish maqsadi */}
        <PolicySection title="Foydalanish maqsadi" icon="bullseye-arrow">
          <Text className="text-slate-300 leading-6 text-sm">
            To‘plangan ma’lumotlar shaxsiylashtirilgan mashg‘ulot rejasini tuzish, kaloriya hisoblash va ilova funksiyalarini yaxshilash maqsadida ishlatiladi.
          </Text>
        </PolicySection>

        {/* 4. Ma'lumotlarni himoya qilish */}
        <PolicySection title="Ma’lumotlarni himoya qilish" icon="lock">
          <Text className="text-slate-300 leading-6 text-sm">
            Barcha ma’lumotlar shifrlangan serverlarda saqlanadi va HTTPS protokoli orqali xavfsiz uzatiladi. Kirish qat'iy cheklangan.
          </Text>
        </PolicySection>

        {/* 5. Tibbiy ogohlantirish - MUHIM */}
        <View className="bg-orange-500/10 border border-orange-500/30 p-5 rounded-[24px] mb-8">
          <View className="flex-row items-center mb-3">
            <Feather name="alert-triangle" size={20} color="#F97316" />
            <Text className="text-orange-500 font-bold ml-2 uppercase tracking-widest text-xs">Tibbiy ogohlantirish</Text>
          </View>
          <Text className="text-slate-300 text-xs leading-5">
            FitLifeUp ilovasi tibbiy maslahat o‘rnini bosmaydi. Reabilitatsiya mashg‘ulotlari umumiy tavsiya bo‘lib, shifokor maslahatini almashtirmaydi.
          </Text>
        </View>

        {/* Footer info */}
        <Text className="text-center text-slate-500 text-[10px] uppercase tracking-[2px] mb-10">
          FitLifeUp v1.0.0 MVP
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}