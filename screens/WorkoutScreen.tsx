import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation.interface';
import BackBtn from 'components/helpers/BackBtn';

export default function WorkoutsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Workouts'>;
}) {
  const [activeCategory, setActiveCategory] = useState('Barchasi');

  const categories = ['Barchasi', 'Yangi', 'Mashhur', 'Saralangan'];

  const handleWorkoutPress = (workoutId: string) => {
    navigation.navigate('WorkoutPlayer', { exerciseId: workoutId });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1210]">
      <View className="flex-row items-center justify-between px-6 py-4">
        <BackBtn navigation={navigation} />
        <Text className="text-xl font-bold text-white">Mashq turi</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Hero Section */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' }} // Bodybuilder rasm
          className="h-80 w-full justify-end"
          imageStyle={{ opacity: 0.6 }}>
          {/* Title and Badge */}
          <View className="px-6 pb-8">
            <View className="mb-2 w-20 items-center rounded-lg bg-[#18da61] py-1">
              <Text className="text-[10px] font-black text-[#0a1210]">PREMIUM</Text>
            </View>
            <Text className="text-4xl font-black text-white">Dasturlar</Text>
            <Text className="mt-1 text-gray-300">Sizning natijangiz — bizning maqsadimiz</Text>
          </View>
        </ImageBackground>

        {/* Categories Horizontal Scroll */}
        <View className="mt-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6">
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setActiveCategory(cat)}
                className={`mr-3 rounded-full px-8 py-3 ${
                  activeCategory === cat ? 'bg-[#18da61]' : 'border border-white/5 bg-[#121b18]'
                }`}>
                <Text
                  className={`font-bold ${activeCategory === cat ? 'text-[#0a1210]' : 'text-gray-400'}`}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Workout Cards List */}
        <View className="mt-8 flex-col gap-y-4 px-6">
          <WorkoutCard
            id="1"
            title="Mushak massasi"
            time="45 min"
            level="Yuqori"
            progress={75}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            onPress={handleWorkoutPress}
          />
          <WorkoutCard
            id="2"
            title="Kuch va quvvat"
            time="60 min"
            level="O'rta"
            progress={30}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            onPress={handleWorkoutPress}
          />
          <WorkoutCard
            id="3"
            title="Quritish (Cutting)"
            time="40 min"
            level="Yuqori"
            progress={0}
            locked={true}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            onPress={handleWorkoutPress}
          />
          <WorkoutCard
            id="4"
            title="Oyoq mashqlari"
            time="55 min"
            level="Yuqori"
            progress={10}
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            onPress={handleWorkoutPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-component for Workout Cards
interface WorkoutCardProps {
  id: string;
  title: string;
  time: string;
  level: string;
  progress: number;
  image: string;
  locked?: boolean;
  onPress: (id: string) => void;
}

const WorkoutCard = ({
  id,
  title,
  time,
  level,
  progress,
  image,
  locked,
  onPress,
}: WorkoutCardProps) => (
  <TouchableOpacity
    onPress={() => !locked && onPress(id)}
    className="flex-row items-center rounded-[32px] border border-white/5 bg-[#121b18] p-4">
    {/* Workout Image */}
    <Image source={{ uri: image }} className="h-24 w-24 rounded-2xl" />

    {/* Info Section */}
    <View className="ml-4 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-white">{title}</Text>
        <Feather
          name={locked ? 'lock' : 'play-circle'}
          size={24}
          color={locked ? '#4b5563' : '#18da61'}
        />
      </View>

      <View className="mt-2 flex-row items-center">
        <Feather name="clock" size={14} color="#4b5563" />
        <Text className="ml-1 text-xs text-gray-500">{time}</Text>
        <View className="mx-2 h-1 w-1 rounded-full bg-gray-500" />
        <MaterialCommunityIcons name="poll" size={14} color="#18da61" />
        <Text className="ml-1 text-xs text-gray-500">{level}</Text>
      </View>

      {/* Progress Bar */}
      <View className="mt-4">
        <View className="mb-1 flex-row justify-between">
          <Text className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
            Jarayon
          </Text>
          <Text className="text-[10px] font-bold text-[#18da61]">{progress}%</Text>
        </View>
        <View className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <View style={{ width: `${progress}%` }} className="h-full bg-[#18da61]" />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
