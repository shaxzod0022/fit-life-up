import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import GreenBtn from '../helpers/GreenBtn';
import XBtn from '../helpers/XBtn';

interface AddFoodModalProps {
  isVisible: { add: boolean; id: string };
  onClose: () => void;
}

export default function AddFoodModal({ isVisible, onClose }: AddFoodModalProps) {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Meva');

  const categories = [
    { name: 'Meva', icon: '🍎' },
    { name: "Sho'rva", icon: '🍜' },
    { name: 'Ichimlik', icon: '🥤' },
    { name: 'Snack', icon: '🌮' },
  ];

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible.add} onRequestClose={onClose}>
      {/* Orqa fonni xiralashtirish uchun pressable */}
      <Pressable className="flex-1 justify-end bg-black/60" onPress={onClose}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Pressable
            className="rounded-t-[40px] border-t border-white/10 bg-[#0a1210] px-6 pb-6 pt-4"
            onPress={(e) => e.stopPropagation()} // Modal ichini bossa yopilib ketmasligi uchun
          >
            {/* Modal tepasidagi chiziqcha */}
            <View className="mb-5 items-center">
              <View className="h-1.5 w-12 rounded-full bg-white/20" />
            </View>

            {/* Header */}
            <View className="mb-8 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-white">Ovqat qo'shish</Text>
              <XBtn onPress={onClose} />
            </View>

            {/* Inputlar */}
            <View className="flex-col gap-y-5">
              <View>
                <Text className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Ovqat nomi
                </Text>
                <View className="h-16 flex-row items-center rounded-2xl border border-white/5 bg-[#121b18] px-5">
                  <TextInput
                    placeholder="Masalan: Grechka va go'sht"
                    placeholderTextColor="#4b5563"
                    className="flex-1 text-base text-white"
                    value={foodName}
                    onChangeText={setFoodName}
                  />
                  <MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#18da61" />
                </View>
              </View>

              <View>
                <Text className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Kaloriya (kkal)
                </Text>
                <View className="h-16 flex-row items-center rounded-2xl border border-white/5 bg-[#121b18] px-5">
                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#4b5563"
                    keyboardType="numeric"
                    className="flex-1 text-2xl font-bold text-white"
                    value={calories}
                    onChangeText={setCalories}
                  />
                  <Feather name="zap" size={20} color="#18da61" />
                </View>
              </View>

              <View>
                <Text className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Izox
                </Text>
                <View className="h-16 flex-row items-center rounded-2xl border border-white/5 bg-[#121b18] px-5">
                  <TextInput
                    placeholder="Masalan: 400 g - sportchasiga ovqatlanish"
                    placeholderTextColor="#4b5563"
                    className="flex-1 text-base text-white"
                  />
                </View>
              </View>
            </View>

            {/* Kategoriyalar */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="mb-5 mt-5 py-2"
              contentContainerStyle={{ paddingRight: 20 }}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.name}
                  onPress={() => setSelectedCategory(cat.name)}
                  className={`mr-3 flex-row items-center rounded-full border px-5 py-3 ${
                    selectedCategory === cat.name
                      ? 'border-[#18da61] bg-[#18da61]/20'
                      : 'border-white/5 bg-[#121b18]'
                  }`}>
                  <Text className="mr-2 text-base">{cat.icon}</Text>
                  <Text className="font-medium text-white">{cat.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Saqlash tugmasi */}
            <GreenBtn text="Saqlash" onPress={onClose} />
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}
