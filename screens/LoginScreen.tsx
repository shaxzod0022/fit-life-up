import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <View className="flex-1 p-6">
          <BackBtn navigation={navigation} />
          <Text className="mt-4 text-center text-[12px] font-bold uppercase tracking-[3px] text-gray-400">
            FITLIFEUP
          </Text>

          <View className="mt-12">
            <Text className="text-3xl font-bold text-white">Kirish</Text>
            <Text className="mt-2 text-lg text-gray-400">Telefon raqamingizni kiriting</Text>
          </View>

          <View className="mt-10">
            <Text className="mb-3 text-sm font-medium text-gray-300">Telefon raqami</Text>
            <View className="h-16 flex-row items-center rounded-3xl border border-white/5 bg-[#0d151c] px-5">
              <Feather name="smartphone" size={20} color="white" />
              <Text className="ml-3 text-lg font-semibold text-white">+998</Text>
              <View className="mx-3 h-6 w-[1px] bg-gray-700" />
              <TextInput
                placeholder="90 123 45 67"
                placeholderTextColor="#4b5563"
                keyboardType="phone-pad"
                className="flex-1 text-lg font-semibold text-white"
                value={phone}
                onChangeText={setPhone}
                maxLength={9}
              />
            </View>
          </View>

          <View className="flex-1 items-center justify-center opacity-20">
            <FontAwesome5
              name="dumbbell"
              size={80}
              color="#18da61"
              style={{ transform: [{ rotate: '-45deg' }] }}
            />
          </View>
          <View>
            <GreenBtn
              className="mb-5"
              text="Kirish"
              onPress={() => navigation.navigate('OTP')}
              icon={
                <Feather name="arrow-right" size={22} color="#0a1210" style={{ marginLeft: 8 }} />
              }
            />
            <View className="flex-row justify-center">
              <Text className="text-base text-gray-400">Ro‘yxatdan o‘tmaganmisiz? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className="text-base font-bold text-[#21C45D]">A'zo bo‘ling</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
