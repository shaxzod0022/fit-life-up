import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import AddFoodModal from 'components/food/AddFoodModal'; // Modal komponentingiz manzili
import EditFoodModal from 'components/food/EditFoodModal';
import DeleteFoodModal from 'components/food/DelFoodModal';

// --- Sub-components ---

interface MacroItemProps {
  label: string;
  current: string;
  total: string;
  color: string;
  percent: number;
}

const MacroItem = ({ label, current, total, color, percent }: MacroItemProps) => (
  <View className="flex-1 items-center">
    <Text className="mb-2 text-[10px] font-bold tracking-widest text-gray-500">{label}</Text>
    <View className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
      <View style={{ width: `${percent}%` }} className={`h-full ${color}`} />
    </View>
    <Text className="mt-2 text-xs font-bold text-white">
      {current}
      <Text className="font-normal text-gray-500">/{total}</Text>
    </Text>
  </View>
);

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  kcal: string;
}

const SectionHeader = ({ icon, title, kcal }: SectionHeaderProps) => (
  <View className="mb-3 mt-8 flex-row items-center justify-between px-1">
    <View className="flex-row items-center">
      {icon}
      <Text className="ml-2 text-xl font-bold text-white">{title}</Text>
    </View>
    <Text className="font-medium text-gray-500">{kcal}</Text>
  </View>
);

interface FoodItemProps {
  name: string;
  sub: string;
  kcal: string;
  onEdit: () => void;
  onDelete: () => void;
  onAdd?: () => void;
}

const FoodItem = ({ name, sub, kcal, onEdit, onDelete }: FoodItemProps) => {
  const swipeableRef = useRef<Swipeable>(null);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-120, 0],
      outputRange: [0, 120],
    });

    return (
      <View className="mb-3 ml-2 w-32 flex-row">
        <View className="mr-2 flex-1 items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              onEdit();
              swipeableRef.current?.close();
            }}
            className="h-12 w-12 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/20">
            <Feather name="edit-2" size={20} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              onDelete();
              swipeableRef.current?.close();
            }}
            className="h-12 w-12 items-center justify-center rounded-full border border-red-500/50 bg-red-500/20">
            <Feather name="trash-2" size={20} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={renderRightActions} friction={2}>
      <View className="mb-3 flex-row items-center justify-between rounded-3xl border border-white/5 bg-[#121b18] p-5 shadow-sm">
        <View className="flex-1">
          <Text className="text-base font-bold text-white">{name}</Text>
          <Text className="mt-1 text-xs text-gray-500">{sub}</Text>
        </View>
        <Text className="font-bold text-[#18da61]">{kcal}</Text>
      </View>
    </Swipeable>
  );
};

// --- Main Screen ---

export default function NutritionScreen() {
  const [crudModal, setCrudModal] = useState<{
    add: boolean;
    del: boolean;
    edit: boolean;
    id: string;
    name: string;
  }>({
    add: false,
    del: false,
    edit: false,
    id: '',
    name: '',
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-[#0a1210]">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4">
          <View className="flex-row items-center">
            <View className="h-11 w-11 items-center justify-center rounded-2xl border border-[#18da61]/20 bg-[#18da61]/10">
              <Ionicons name="calendar" size={22} color="#18da61" />
            </View>
            <View className="ml-3">
              <Text className="text-lg font-bold text-white">Bugungi ovqatlanish</Text>
              <Text className="text-xs text-gray-500">Payshanba, 26-Fevral</Text>
            </View>
          </View>
          <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-full border border-[#18da61]/20 bg-[#18da61]/10">
            <Feather name="user" size={20} color="#18da61" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 80 }} className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          {/* Main Calorie Progress Card */}
          <View className="mt-4 items-center rounded-[48px] border border-white/5 bg-[#121b18] p-8 shadow-2xl">
            <View className="relative h-52 w-52 items-center justify-center">
              {/* Outer Glow Ring */}
              <View className="absolute h-60 w-60 rounded-full border-[14px] border-[#18da61]/5" />

              {/* Progress Ring */}
              <View className="h-60 w-60 items-center justify-center rounded-full border-[14px] border-[#18da61]/10">
                <View
                  style={{ transform: [{ rotate: '45deg' }] }}
                  className="absolute h-60 w-60 rounded-full border-[14px] border-[#18da61] border-l-transparent border-t-transparent shadow-lg shadow-green-400"
                />
                <View className="items-center">
                  <Text className="text-3xl font-black text-white">1800</Text>
                  <Text className="mt-1 text-sm font-bold text-gray-500">/ 2200 kcal</Text>
                  <View className="mt-3 rounded-full border border-[#18da61]/30 bg-[#18da61]/20 px-4 py-1.5">
                    <Text className="text-[10px] font-black tracking-tighter text-[#18da61]">
                      82% BAJARILDI
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Macros Section */}
            <View className="mt-12 w-full flex-row justify-between border-t border-white/5 pt-8">
              <MacroItem
                label="OQSIL"
                current="90g"
                total="150g"
                color="bg-[#18da61]"
                percent={60}
              />
              <MacroItem
                label="UGLEVOD"
                current="210g"
                total="250g"
                color="bg-[#18da61]"
                percent={84}
              />
              <MacroItem label="YOG'" current="45g" total="70g" color="bg-[#18da61]" percent={64} />
            </View>
          </View>

          {/* Meals List */}
          <View className="mt-4 pb-32">
            {/* Nonushta */}
            <SectionHeader
              icon={<Feather name="sun" size={22} color="#18da61" />}
              title="Nonushta"
              kcal="510 kcal"
            />
            <FoodItem
              name="3 ta tuxum"
              sub="150g • Oqsilga boy"
              kcal="210 kcal"
              onEdit={() => setCrudModal({ ...crudModal, edit: true, id: '' })}
              onDelete={() => setCrudModal({ ...crudModal, del: true, id: '', name: '3 ta tuxum' })}
              onAdd={() => setCrudModal({ ...crudModal, add: true, id: '' })}
            />
            <FoodItem
              name="Suli bo'tqasi"
              sub="200g • Murakkab uglevodlar"
              kcal="300 kcal"
              onEdit={() => setCrudModal({ ...crudModal, edit: true, id: '' })}
              onDelete={() =>
                setCrudModal({ ...crudModal, del: true, id: '', name: "Suli bo'tqasi" })
              }
              onAdd={() => setCrudModal({ ...crudModal, add: true, id: '' })}
            />
            <TouchableOpacity
              onPress={() => setCrudModal({ ...crudModal, add: true, id: '' })}
              className="mt-2 flex-row items-center justify-center rounded-2xl border border-dashed border-[#18da61]/40 bg-[#18da61]/5 py-5">
              <Feather name="plus-circle" size={20} color="#18da61" />
              <Text className="ml-2 font-bold text-[#18da61]">Ovqat qo'shish</Text>
            </TouchableOpacity>

            {/* Tushlik */}
            <SectionHeader
              icon={<MaterialCommunityIcons name="hamburger" size={22} color="#18da61" />}
              title="Tushlik"
              kcal="550 kcal"
            />
            <FoodItem
              name="Tovuq va guruch"
              sub="350g • Sportcha tushlik"
              kcal="550 kcal"
              onEdit={() => setCrudModal({ ...crudModal, edit: true, id: '' })}
              onDelete={() =>
                setCrudModal({ ...crudModal, del: true, id: '', name: 'Tovuq va guruch' })
              }
              onAdd={() => setCrudModal({ ...crudModal, add: true, id: '' })}
            />
            <TouchableOpacity
              onPress={() => setCrudModal({ ...crudModal, add: true, id: '' })}
              className="mt-2 flex-row items-center justify-center rounded-2xl border border-dashed border-[#18da61]/40 bg-[#18da61]/5 py-5">
              <Feather name="plus-circle" size={20} color="#18da61" />
              <Text className="ml-2 font-bold text-[#18da61]">Ovqat qo'shish</Text>
            </TouchableOpacity>

            {/* Kechki ovqat - Bo'sh holat */}
            <SectionHeader
              icon={<Feather name="moon" size={22} color="#18da61" />}
              title="Kechki ovqat"
              kcal="- kcal"
            />
            <TouchableOpacity
              onPress={() => setCrudModal({ ...crudModal, add: true, id: '' })}
              className="mt-2 items-center justify-center rounded-2xl border border-white/5 bg-[#121b18] py-10">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#18da61]/10">
                <Feather name="plus" size={24} color="#18da61" />
              </View>
              <Text className="mt-3 font-medium text-gray-500">Rejalashtirish uchun bosing</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Floating Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setCrudModal({ ...crudModal, add: true, id: '' })}
          className="absolute bottom-8 right-8 h-16 w-16 items-center justify-center rounded-full bg-[#18da61] shadow-2xl shadow-green-500">
          <Feather name="plus" size={32} color="#0a1210" />
        </TouchableOpacity>

        <AddFoodModal
          isVisible={crudModal}
          onClose={() => setCrudModal({ ...crudModal, add: false, id: '' })}
        />
        <EditFoodModal
          isVisible={crudModal}
          onClose={() => setCrudModal({ ...crudModal, edit: false, id: '' })}
        />
        <DeleteFoodModal
          isVisible={crudModal}
          onClose={() => setCrudModal({ ...crudModal, del: false, id: '' })}
          onConfirm={() => setCrudModal({ ...crudModal, del: false, id: '' })}
          itemName={crudModal.name}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
