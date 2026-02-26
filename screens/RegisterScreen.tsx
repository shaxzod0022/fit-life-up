import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: { navigation: NavigationProp }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View className="flex-1 p-6">
            <View className="mb-8 flex-row items-center justify-between">
              <BackBtn navigation={navigation} />
              <View className="flex-row gap-x-1">
                <View className="h-2 w-5 rounded-full bg-[#21C45D]" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
              </View>
            </View>

            <View className="mb-10">
              <Text className="mb-4 text-3xl font-bold text-white">Ro'yxatdan o'tish</Text>
              <Text className="text-base leading-6 text-[#21C45D]">
                Ma'lumotlaringizni kiriting va sog'lom hayot sari ilk qadamni tashlang
              </Text>
            </View>

            <View className="gap-y-6">
              <View>
                <Text className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#21C45D]">
                  Ismingizni kiriting
                </Text>
                <View className="h-16 flex-row items-center rounded-2xl border border-white/10 bg-white/5 px-4">
                  <Feather name="user" size={20} color="#94A3B8" />
                  <TextInput
                    placeholder="Masalan: Azizbek"
                    placeholderTextColor="#475569"
                    className="ml-3 flex-1 text-base text-white"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>

              <View>
                <Text className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#21C45D]">
                  Telefon raqami
                </Text>
                <View className="h-16 justify-center rounded-2xl border border-white/10 bg-white/5 px-4">
                  <TextInput
                    placeholder="+998 (90) 123-45-67"
                    placeholderTextColor="#475569"
                    keyboardType="phone-pad"
                    className="text-lg tracking-wider text-white"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>
                <Text className="ml-1 mt-2 text-[11px] text-slate-500">
                  Sizga tasdiqlash kodi yuboriladi
                </Text>
              </View>
            </View>

            <View className="mt-8 flex-row items-center rounded-2xl border border-[#21C45D20] bg-[#48f8830d] p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#21C45D20]">
                <Feather name="shield" size={20} color="#21C45D" />
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-sm font-bold text-[#21C45D]">Xavfsiz va Ishonchli</Text>
                <Text className="mt-0.5 text-[11px] text-slate-400">
                  FitLifeUp sizning shaxsiy ma'lumotlaringiz xavfsizligini kafolatlaydi.
                </Text>
              </View>
            </View>

            <View className="mt-5">
              <Text className="mb-6 text-center text-sm leading-5 text-slate-500">
                "Ro'yxatdan o'tish" tugmasini bosish orqali siz bizning{' '}
                <Text onPress={() => navigation.navigate('Terms')} className="text-[#21C45D]">
                  Foydalanish shartlari
                </Text>{' '}
                va{' '}
                <Text onPress={() => navigation.navigate('Privacy')} className="text-[#21C45D]">
                  Maxfiylik siyosatiga
                </Text>{' '}
                rozilik bildirasiz.
              </Text>

              <GreenBtn
                text="Ro'yxatdan o'tish"
                onPress={() => navigation.navigate('OTP')}
                icon={<Feather name="arrow-right" size={20} color="#0a1210" />}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
