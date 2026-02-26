import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons, EvilIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import BackBtn from 'components/helpers/BackBtn';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function ProfileScreen({ navigation }: { navigation: ProfileScreenNavigationProp }) {
  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header Navigation */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="text-xl font-bold text-white">Profil</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-6">
        {/* Profile Info Section */}
        <View className="mb-5 items-center">
          <View className="relative">
            {/* Avatar with Neon Border */}
            <View className="h-32 w-32 items-center justify-center rounded-full border-2 border-[#18da61] p-0.5">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' }} // O'zingizni rasm manzilingizni qo'ying
                className="h-full w-full rounded-full"
              />
              {/* <EvilIcons name="user" size={100} color="white" /> */}
            </View>
            {/* Edit Button */}
            <TouchableOpacity className="absolute bottom-0 right-0 h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a1210] bg-[#18da61]">
              <Feather name="edit-2" size={16} color="black" />
            </TouchableOpacity>
          </View>

          <Text className="mt-4 text-2xl font-bold text-white">Avazbek</Text>
          <Text className="mt-1 text-base text-gray-400">+998 90 123 45 67</Text>
        </View>

        {/* Stats Cards */}
        <View className="mb-5 flex-row justify-between">
          <View className="w-[47%] justify-center rounded-3xl bg-[#121b18] p-4">
            <Text className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Maqsad
            </Text>
            <Text className="text-lg font-bold text-[#18da61]">Reabilitatsiya</Text>
          </View>

          <View className="w-[47%] justify-center rounded-3xl bg-[#121b18] p-4">
            <Text className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Haftalik faollik
            </Text>
            <Text className="text-lg font-bold text-[#18da61]">O'rtacha</Text>
          </View>
        </View>

        {/* Settings List */}
        <View>
          <Text className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gray-500">
            Sozlamalar
          </Text>

          <View className="rounded-3xl bg-[#121b18] py-2">
            <SettingItem
              onPress={() => navigation.navigate('EditProfile')}
              icon={<Feather name="user" size={20} color="#18da61" />}
              label="Profilni tahrirlash"
            />
            <SettingItem
              icon={<Feather name="lock" size={20} color="#18da61" />}
              label="Maxfiylik siyosati"
              onPress={() => navigation.navigate('Privacy')}
            />
            <SettingItem
              icon={<Feather name="file-text" size={20} color="#18da61" />}
              label="Foydalanish shartlari"
              isLast
              onPress={() => navigation.navigate('Terms')}
            />
          </View>
        </View>

        {/* Delete Account Button */}
        <TouchableOpacity className="my-5 flex-row items-center justify-center gap-x-2">
          <Feather name="trash-2" size={18} color="#ef4444" />
          <Text className="text-base font-semibold text-red-500">Hisobni o'chirish</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-component for Setting Rows
const SettingItem = ({
  icon,
  label,
  isLast,
  onPress,
}: {
  icon: any;
  label: string;
  isLast?: boolean;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`mx-4 flex-row items-center py-5 ${!isLast ? 'border-b border-white/5' : ''}`}>
    <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#18da61]/10">{icon}</View>
    <Text className="ml-4 flex-1 text-base font-medium text-white">{label}</Text>
    <Feather name="chevron-right" size={20} color="#4b5563" />
  </TouchableOpacity>
);
