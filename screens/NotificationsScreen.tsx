import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import NoNotifications from 'components/notification/NoNotifications';
import BackBtn from 'components/helpers/BackBtn';

export default function NotificationsScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <Feather name="dumbbell" size={16} color="#18da61" />,
      title: "Mashg'ulot vaqti",
      desc: "Bugungi kungi mashg'ulotni boshlashni unutmang.",
      time: '2 soat oldin',
      unread: true,
    },
    {
      id: 2,
      icon: <Feather name="leaf" size={20} color="#18da61" />,
      title: 'Ovqatlanish',
      desc: 'Suv ichish va vitaminlarni qabul qilish vaqti keldi.',
      time: '3 soat oldin',
      unread: true,
    },
    {
      id: 3,
      icon: <Feather name="fire" size={18} color="#f97316" />,
      title: 'Yutuqlar',
      desc: 'Tabriklaymiz! Siz 7 kunlik seriyani saqlab qoldingiz.',
      time: '5 soat oldin',
      bgColor: 'bg-orange-500/10',
    },
    {
      id: 4,
      icon: <Feather name="shield" size={18} color="#3b82f6" />,
      title: "Sog'lomlashtirish",
      desc: 'Tiklanish mashqlarini bajarish uchun qulay vaqt.',
      time: 'Kecha',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 5,
      icon: <Feather name="settings" size={18} color="#94a3b8" />,
      title: 'Profil yangilandi',
      desc: 'Sizning vazningiz muvaffaqiyatli yangilandi.',
      time: '2 kun oldin',
      bgColor: 'bg-slate-500/10',
    },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="text-xl font-bold text-white">Bildirishnomalar</Text>
        <View className="w-7" />
      </View>

      {notifications.length === 0 ? (
        <NoNotifications navigation={navigation} />
      ) : (
        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          {/* BUGUN */}
          <Text className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            Bugun
          </Text>

          <NotificationItem
            icon={<Feather name="dumbbell" size={16} color="#18da61" />}
            title="Mashg'ulot vaqti"
            desc="Bugungi kungi mashg'ulotni boshlashni unutmang."
            time="2 soat oldin"
            unread
          />

          <NotificationItem
            icon={<Feather name="leaf" size={20} color="#18da61" />}
            title="Ovqatlanish"
            desc="Suv ichish va vitaminlarni qabul qilish vaqti keldi."
            time="3 soat oldin"
            unread
          />

          {/* AVVALGI */}
          <Text className="mb-4 mt-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            Avvalgi
          </Text>

          <NotificationItem
            icon={<Feather name="fire" size={18} color="#f97316" />}
            title="Yutuqlar"
            desc="Tabriklaymiz! Siz 7 kunlik seriyani saqlab qoldingiz."
            time="5 soat oldin"
            bgColor="bg-orange-500/10"
          />

          <NotificationItem
            icon={<Feather name="shield" size={18} color="#3b82f6" />}
            title="Sog'lomlashtirish"
            desc="Tiklanish mashqlarini bajarish uchun qulay vaqt."
            time="Kecha"
            bgColor="bg-blue-500/10"
          />

          <NotificationItem
            icon={<Feather name="settings" size={18} color="#94a3b8" />}
            title="Profil yangilandi"
            desc="Sizning vazningiz muvaffaqiyatli yangilandi."
            time="2 kun oldin"
            bgColor="bg-slate-500/10"
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const NotificationItem = ({
  icon,
  title,
  desc,
  time,
  unread,
  bgColor = 'bg-[#18da61]/10',
}: any) => (
  <TouchableOpacity className="mb-3 flex-row items-start rounded-3xl border border-white/5 bg-[#1e293b] p-4">
    <View className={`h-12 w-12 items-center justify-center rounded-2xl ${bgColor}`}>{icon}</View>
    <View className="ml-4 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold text-white">{title}</Text>
        <Text className="text-xs text-gray-500">{time}</Text>
      </View>
      <Text className="mt-1 leading-5 text-gray-400">{desc}</Text>
    </View>
    {unread && <View className="absolute right-4 top-5 h-2 w-2 rounded-full bg-[#18da61]" />}
  </TouchableOpacity>
);
