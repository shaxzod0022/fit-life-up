import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Terms'>;

export default function TermsOfServiceScreen({ navigation }: { navigation: NavigationProp }) {
  
  const TermSection = ({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
    <View className="mb-6 bg-white/5 border border-white/10 p-5 rounded-[24px]">
      <View className="flex-row items-center mb-3">
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
          Foydalanish shartlari
        </Text>
      </View>

      <ScrollView 
        className="flex-1 px-6" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Text className="text-slate-400 text-sm leading-6 mb-8 italic">
          FitLifeUp ilovasidan foydalanish orqali siz quyidagi shartlarga to'liq rozilik bildirasiz.
        </Text>

        {/* 1. Umumiy qoidalar */}
        <TermSection title="Umumiy qoidalar" icon="file-document-outline">
          <Text className="text-slate-300 leading-6 text-sm">
            Ushbu shartlar FitLifeUp mobil ilovasining barcha foydalanuvchilari uchun majburiy hisoblanadi.
          </Text>
        </TermSection>

        {/* 2. Hisob va xavfsizlik */}
        <TermSection title="Hisob va xavfsizlik" icon="account-shield-outline">
          <Text className="text-slate-300 leading-6 text-sm">
            Foydalanuvchi o‘z telefon raqami orqali ro‘yxatdan o‘tadi va hisob xavfsizligi, parollar hamda barcha faolliklar uchun shaxsan javobgardir.
          </Text>
        </TermSection>

        {/* 3. Tibbiy mas’uliyat - KRITIK QISM */}
        <View className="mb-6 bg-red-500/5 border border-red-500/20 p-5 rounded-[24px]">
          <View className="flex-row items-center mb-3">
            <View className="bg-red-500/20 p-2 rounded-lg">
              <Octicons name="alert" size={18} color="#EF4444" />
            </View>
            <Text className="text-red-400 font-bold ml-3 text-lg">Tibbiy mas’uliyat</Text>
          </View>
          <Text className="text-slate-300 leading-6 text-sm mb-2">
            Ilovadagi mashg‘ulot va reabilitatsiya dasturlari umumiy tavsiya bo‘lib, professional tibbiy maslahat o‘rnini bosmaydi.
          </Text>
          <Text className="text-white font-bold text-sm">
            Foydalanuvchi o‘z sog‘ligi uchun mustaqil javobgardir.
          </Text>
        </View>

        {/* 4. Noto‘g‘ri foydalanish */}
        <TermSection title="Taqiqlar" icon="block-helper">
          <View className="gap-y-2">
            {[
              'Ilovani zararli maqsadda ishlatish',
              'Tizimni buzishga urinish',
              'Soxta ma’lumot kiritish'
            ].map((text, i) => (
              <View key={i} className="flex-row items-center">
                <Feather name="x-circle" size={14} color="#94A3B8" />
                <Text className="text-slate-400 text-sm ml-2">{text}</Text>
              </View>
            ))}
          </View>
        </TermSection>

        {/* 5. Intellektual mulk */}
        <TermSection title="Intellektual mulk" icon="copyright">
          <Text className="text-slate-300 leading-6 text-sm">
            FitLifeUp dizayni, kod, logotiplar va barcha kontent kompaniyaning mutlaq mulki hisoblanadi.
          </Text>
        </TermSection>

        {/* 6. Javobgarlikni cheklash */}
        <TermSection title="Javobgarlikni cheklash" icon="gavel">
          <Text className="text-slate-300 leading-6 text-sm italic">
            FitLifeUp ilovasidan foydalanish natijasida yuzaga kelgan har qanday sog‘liq bilan bog‘liq oqibatlar uchun kompaniya javobgarlikni o'z zimmasiga olmaydi.
          </Text>
        </TermSection>

        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="mt-4 bg-[#21C45D] py-4 rounded-2xl items-center"
        >
          <Text className="text-[#0f172A] font-bold text-lg">Tushunarli</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}