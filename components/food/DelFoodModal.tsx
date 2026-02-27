import React from 'react';
import { View, Text, Modal, TouchableOpacity, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface DeleteConfirmModalProps {
  isVisible: { del: boolean; id: string };
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

export default function DeleteFoodModal({
  isVisible,
  onClose,
  onConfirm,
  itemName,
}: DeleteConfirmModalProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible.del} onRequestClose={onClose}>
      <Pressable className="flex-1 items-center justify-center bg-black/70 px-6" onPress={onClose}>
        <Pressable
          className="w-full items-center rounded-[40px] border border-white/10 bg-[#0a1210] p-5"
          onPress={(e) => e.stopPropagation()}>
          {/* Ogohlantirish ikonasi */}
          <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
            <View className="h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
              <Feather name="trash-2" size={32} color="#ef4444" />
            </View>
          </View>

          {/* Matnlar */}
          <Text className="mb-3 text-center text-xl font-bold text-white">
            O'chirishni tasdiqlaysizmi?
          </Text>
          <Text className="mb-8 text-center text-base leading-6 text-gray-400">
            <Text className="font-bold text-white">"{itemName}"</Text> ro'yxatdan butunlay
            o'chiriladi. Bu amalni ortga qaytarib bo'lmaydi.
          </Text>

          {/* Tugmalar */}
          <View className="w-full flex-col gap-y-3">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onConfirm}
              className="h-14 w-full items-center justify-center rounded-3xl bg-red-500 shadow-lg shadow-red-500/30">
              <Text className="text-lg font-bold text-white">Ha, o'chirilsin</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onClose}
              className="h-14 w-full items-center justify-center rounded-3xl border border-white/5 bg-[#121b18]">
              <Text className="text-lg font-bold text-gray-400">Bekor qilish</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
