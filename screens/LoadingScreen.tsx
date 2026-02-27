import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Dimensions, SafeAreaView } from 'react-native';
import DumbellIcon from '../assets/icons/dumbell.svg';
import { RootStackParamList } from 'types/navigation.interface';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

const { width } = Dimensions.get('window');
const PROGRESS_BAR_WIDTH = width * 0.9;

// navigation propini qabul qilamiz
export default function LoadingScreen({ navigation }: { navigation: NavigationProp }) {
  const [percent, setPercent] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('Welcome');
    });

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 48);

    return () => clearInterval(interval);
  }, []);

  const currentBarWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, PROGRESS_BAR_WIDTH],
  });

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <View className="flex-1 items-center justify-around px-5 pb-12">
        {/* Logo Section */}
        <View className="mt-12 items-center">
          <View className="mb-6 rounded-2xl bg-white p-6">
            <DumbellIcon
              width={60}
              height={60}
              // fill property can be added if the svg supports it
            />
          </View>
          <Text className="mb-2 text-center text-4xl font-bold text-white">
            FitLife<Text className="text-[#21C45D]">Up</Text>
          </Text>
          <Text className="text-center text-[12px] font-semibold tracking-[2.8px] text-[#22C55EB2]">
            REABILITATSIYA VA SOG'LOMLASHTIRISH
          </Text>
        </View>

        {/* Loading Section */}
        <View className="w-full items-center">
          <View
            style={{ width: PROGRESS_BAR_WIDTH }}
            className="mb-5 h-[6px] overflow-hidden rounded-full bg-[#1E293B]">
            <Animated.View
              style={{ width: currentBarWidth }}
              className="h-full rounded-full bg-[#21C45D]"
            />
          </View>

          <View className="w-full flex-row justify-between px-2">
            <Text className="text-[12px] uppercase tracking-widest text-[#94A3B8]">
              Yuklanmoqda...
            </Text>
            <Text className="text-[14px] font-bold text-[#21C45D]">{percent}%</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
