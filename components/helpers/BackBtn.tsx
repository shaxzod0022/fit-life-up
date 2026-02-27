import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

interface BackBtnProps {
  navigation: NavigationProp<any>;
}

export default function BackBtn({ navigation }: BackBtnProps) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="h-10 w-10 items-center justify-center rounded-full bg-white/10">
      <Feather name="chevron-left" size={24} color="#21C45D" />
    </TouchableOpacity>
  );
}
