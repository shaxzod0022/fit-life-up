import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';
import GreenBtn from 'components/helpers/GreenBtn';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'OTP'>;

export default function OTPScreen({ route, navigation }: Props) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(48);
  const phoneNumber = route.params.phoneNumber;
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleOTP = () => {
    if (route.params?.login) {
      navigation.navigate('Main', { screen: 'Asosiy' });
    } else {
      navigation.navigate('PersonalInfo');
    }
  };

  // Taymer mantiqi
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Agar raqam yozilsa, keyingi inputga o'tish
    if (text.length !== 0 && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    // Backspace bosilganda oldingi inputga qaytish
    if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
      inputs.current[index - 1]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <View className="flex-1 p-6">
          {/* Header Section */}
          <View className="mb-8 flex-row items-center justify-between">
            <BackBtn navigation={navigation} />
            <View className="flex-row gap-x-1">
              <View className="h-2 w-2 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-5 rounded-full bg-[#21C45D]" />
              <View className="h-2 w-2 rounded-full bg-white/20" />
              <View className="h-2 w-2 rounded-full bg-white/20" />
              <View className="h-2 w-2 rounded-full bg-white/20" />
            </View>
          </View>
          <Text className="my-5 text-center text-3xl font-bold text-white">Tasdiqlash kodi</Text>

          {/* Titles */}
          <View className="mb-10">
            <Text className="mb-4 text-xl font-bold text-white">Kod kiritish</Text>
            <Text className="text-base leading-6 text-slate-400">
              Biz <Text className="font-bold text-white">+998 90 • • • • • 77</Text> raqamiga 6
              xonali tasdiqlash kodini yubordik
            </Text>
          </View>

          {/* OTP Input Fields */}
          <View className="mb-8 flex-row justify-between">
            {code.map((digit, index) => (
              <View
                key={index}
                className={`aspect-square w-[16%] items-center justify-center rounded-xl border-2 bg-white/5 ${
                  digit ? 'border-[#21C45D]' : 'border-white/10'
                }`}>
                <TextInput
                  ref={(el) => {
                    inputs.current[index] = el;
                  }}
                  className="h-full w-full text-center text-xl font-bold text-white"
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  selectionColor="#21C45D"
                />
              </View>
            ))}
          </View>

          {/* Timer & Resend */}
          <View className="mb-10 items-center">
            <View className="mb-4 flex-row items-center">
              <Feather name="clock" size={16} color="#94A3B8" />
              <Text className="ml-2 text-slate-400">Kodni qayta yuborish: {formatTime(timer)}</Text>
            </View>

            <TouchableOpacity disabled={timer > 0}>
              <Text className={`font-bold ${timer > 0 ? 'text-slate-600' : 'text-[#21C45D]'}`}>
                Qayta yuborish
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Button */}
          <View className="mt-auto">
            <GreenBtn text="Davom etish" onPress={handleOTP} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
