import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface XBtnProps {
  onPress: () => void;
}

export default function XBtn({ onPress }: XBtnProps) {
  return (
    <TouchableOpacity
      className="h-8 w-8 items-center justify-center rounded-full bg-white/10"
      onPress={onPress}>
      <Feather name="x" size={20} color="#18da61" />
    </TouchableOpacity>
  );
}
