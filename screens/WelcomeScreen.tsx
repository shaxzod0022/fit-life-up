import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Icon from '../assets/icons/welcome-icon.svg';
import PowerIcon from '../assets/icons/power-icon.svg';
import Img from '../assets/images/welcome-image.png';
import { RadialBackground } from 'components/helpers/RadialBacground';
import GreenBtn from 'components/helpers/GreenBtn';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: { navigation: NavigationProp }) {
  return (
    <SafeAreaView className="flex-1">
      <RadialBackground />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-between gap-y-16 p-6">
          <View className="items-center gap-y-6">
            <Icon width={84} height={84} />
            <Text className="text-center text-sm text-[#21C45D]">FITLIFEUP</Text>
            <Text className="text-center text-4xl font-bold text-white">
              Hayotingni <Text className="text-[#21C45D]">boshqar</Text>
            </Text>
            <Text className="text-md text-center leading-6 text-slate-400">
              Sog'ligingizni tiklash va faol hayot tarziga qaytish uchun mukammal hamroh
            </Text>
          </View>

          <View className="relative flex flex-col items-center">
            <Image source={Img} className="w-full rounded-lg" />
            <View className="absolute bottom-0 flex w-full flex-row items-center gap-3 rounded-lg bg-[#122017CC] p-3">
              <View>
                <PowerIcon width={50} height={50} />
              </View>
              <View>
                <Text className="text-sm text-white">KUNLIK REJA</Text>
                <Text className="text-md font-semibold text-white">Tiklanish mashqlari 4#</Text>
              </View>
            </View>
          </View>

          <View className="gap-y-4">
            <GreenBtn text="Ro'yxatdan o'tish" onPress={() => navigation.navigate('Register')} />

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              className="items-center rounded-2xl border border-slate-700 py-4">
              <Text className="text-lg font-medium text-white">Kirish</Text>
            </TouchableOpacity>

            <Text className="mt-4 text-center text-xs leading-5 text-slate-500">
              Davom etish orqali siz bizning{' '}
              <Text
                onPress={() => navigation.navigate('Terms')}
                className="font-bold text-[#21C45D]">
                Foydalanish shartlari
              </Text>{' '}
              va{' '}
              <Text
                onPress={() => navigation.navigate('Privacy')}
                className="font-bold text-[#21C45D]">
                Maxfiylik siyosatimizga
              </Text>{' '}
              rozilik bildirgan bo'lasiz
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
