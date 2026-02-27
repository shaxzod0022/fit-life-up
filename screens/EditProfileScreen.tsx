import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';

export default function EditProfileScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'EditProfile'>;
}) {
  const [name, setName] = useState('Avazbek');
  const [age, setAge] = useState('25');
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('80');

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4">
          <BackBtn navigation={navigation} />
          <Text className="text-xl font-bold text-white">Profilni tahrirlash</Text>
          <View className="w-7" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6">
          {/* Avatar Section */}
          <View className="mb-5 items-center">
            <View className="relative">
              <View className="h-32 w-32 items-center justify-center rounded-full border-2 border-[#18da61]/30 p-1">
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' }} // Namuna rasm
                  className="h-full w-full rounded-full"
                />
              </View>
              <TouchableOpacity className="absolute bottom-1 right-1 h-9 w-9 items-center justify-center rounded-full bg-[#18da61]">
                <Ionicons name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="mt-4">
              <Text className="font-medium text-gray-400">Rasmni o'zgartirish</Text>
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View className="flex-col gap-y-5">
            {/* Name Input */}
            <View>
              <Text className="mb-2 ml-1 text-sm font-medium text-gray-400">Ism</Text>
              <View className="h-16 justify-center rounded-2xl border border-white/5 bg-[#121b18] px-5">
                <TextInput
                  value={name}
                  onChangeText={setName}
                  className="text-lg font-medium text-white"
                />
              </View>
            </View>

            {/* Age Input */}
            <View>
              <Text className="mb-2 ml-1 text-sm font-medium text-gray-400">Yosh</Text>
              <View className="h-16 justify-center rounded-2xl border border-white/5 bg-[#121b18] px-5">
                <TextInput
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                  className="text-lg font-medium text-white"
                />
              </View>
            </View>

            {/* Row: Height & Weight */}
            <View className="flex-row justify-between">
              <View className="w-[47%]">
                <Text className="mb-2 ml-1 text-sm font-medium text-gray-400">Bo'y (sm)</Text>
                <View className="h-16 flex-row items-center justify-between rounded-2xl border border-white/5 bg-[#121b18] px-5">
                  <TextInput
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    className="flex-1 text-lg font-medium text-white"
                  />
                  <Text className="font-bold text-gray-500">sm</Text>
                </View>
              </View>

              <View className="w-[47%]">
                <Text className="mb-2 ml-1 text-sm font-medium text-gray-400">Vazn (kg)</Text>
                <View className="h-16 flex-row items-center justify-between rounded-2xl border border-white/5 bg-[#121b18] px-5">
                  <TextInput
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    className="flex-1 text-lg font-medium text-white"
                  />
                  <Text className="font-bold text-gray-500">kg</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Additional Settings */}
          <View className="my-10 overflow-hidden rounded-3xl bg-[#121b18]">
            <TouchableOpacity className="flex-row items-center border-b border-white/5 px-5 py-5">
              <Feather name="lock" size={20} color="#94a3b8" />
              <Text className="ml-4 flex-1 font-medium text-white">Maxfiylik sozlamalari</Text>
              <Feather name="chevron-right" size={20} color="#475569" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationSettings')}
              className="flex-row items-center px-5 py-5">
              <Feather name="bell" size={20} color="#94a3b8" />
              <Text className="ml-4 flex-1 font-medium text-white">Bildirishnomalar</Text>
              <Feather name="chevron-right" size={20} color="#475569" />
            </TouchableOpacity>
          </View>

          {/* Save Button */}
          <GreenBtn text="Saqlash" className="mb-6" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
