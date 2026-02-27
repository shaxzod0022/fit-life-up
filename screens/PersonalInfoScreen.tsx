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
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PersonalInfo'>;

export default function PersonalInfoScreen({ navigation }: { navigation: NavigationProp }) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

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
                <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
                <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
                <View className="h-2 w-5 rounded-full bg-[#21C45D]" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
                <View className="h-2 w-2 rounded-full bg-white/20" />
              </View>
            </View>

            {/* Titles */}
            <View className="mb-10">
              <Text className="mb-4 text-3xl font-bold text-white">Shaxsiy ma'lumotlar</Text>
              <Text className="text-base leading-6 text-slate-400">
                Reabilitatsiya rejasini tuzish uchun quyidagi ma'lumotlarni kiriting
              </Text>
            </View>

            {/* Gender Selection */}
            <View className="mb-8">
              <Text className="mb-4 text-sm font-bold uppercase tracking-[2px] text-slate-400">
                Jins
              </Text>
              <View className="flex-row gap-x-4">
                <TouchableOpacity
                  onPress={() => setGender('male')}
                  className={`h-16 flex-1 flex-row items-center justify-center rounded-2xl border ${gender === 'male' ? 'border-[#21C45D] bg-[#21C45D]' : 'border-white/10 bg-white/5'}`}>
                  <FontAwesome5 name="mars" size={18} color="white" />
                  <Text className={`ml-2 text-base font-bold text-white`}>Erkak</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setGender('female')}
                  className={`h-16 flex-1 flex-row items-center justify-center rounded-2xl border ${gender === 'female' ? 'border-[#21C45D] bg-[#21C45D]' : 'border-white/10 bg-white/5'}`}>
                  <FontAwesome5 name="venus" size={18} color="white" />
                  <Text className={`ml-2 text-base font-bold text-white`}>Ayol</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Age Input */}
            <View className="mb-8">
              <Text className="mb-4 text-sm font-bold uppercase tracking-[2px] text-slate-400">
                Yosh
              </Text>
              <View className="h-16 flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4">
                <TextInput
                  placeholder="Masalan: 25"
                  placeholderTextColor="#475569"
                  keyboardType="numeric"
                  className="flex-1 text-lg text-white"
                  value={age}
                  onChangeText={setAge}
                />
                <Text className="text-slate-500">yosh</Text>
              </View>
            </View>

            {/* Height & Weight Row */}
            <View className="mb-8 flex-row gap-x-4">
              <View className="flex-1">
                <Text className="mb-4 text-sm font-bold uppercase tracking-[2px] text-slate-400">
                  Bo'y
                </Text>
                <View className="h-16 flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4">
                  <TextInput
                    placeholder="175"
                    placeholderTextColor="#475569"
                    keyboardType="numeric"
                    className="flex-1 text-lg text-white"
                    value={height}
                    onChangeText={setHeight}
                  />
                  <Text className="text-slate-500">cm</Text>
                </View>
              </View>
              <View className="flex-1">
                <Text className="mb-4 text-sm font-bold uppercase tracking-[2px] text-slate-400">
                  Vazn
                </Text>
                <View className="h-16 flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4">
                  <TextInput
                    placeholder="70"
                    placeholderTextColor="#475569"
                    keyboardType="numeric"
                    className="flex-1 text-lg text-white"
                    value={weight}
                    onChangeText={setWeight}
                  />
                  <Text className="text-slate-500">kg</Text>
                </View>
              </View>
            </View>

            {/* Info Card */}
            <View className="mb-5 flex-row rounded-2xl border border-[#21C45D20] bg-[#21C45D10] p-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#21C45D20]">
                <Feather name="info" size={20} color="#21C45D" />
              </View>
              <Text className="ml-3 flex-1 text-sm leading-4 text-slate-400">
                Sizning ma'lumotlaringiz reabilitatsiya mashqlarining intensivligini hisoblash uchun
                ishlatiladi va xavfsiz saqlanadi.
              </Text>
            </View>

            {/* Next Button */}
            <View className="mt-auto">
              <GreenBtn
                text="Keyingi"
                onPress={() => navigation.navigate('Goal')}
                icon={<Feather name="arrow-right" size={20} color="#0a1210" />}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
