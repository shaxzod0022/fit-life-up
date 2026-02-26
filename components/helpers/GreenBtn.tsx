import { Text, TouchableOpacity } from 'react-native';

export default function GreenBtn({
  text,
  onPress,
  className,
  icon,
}: {
  text: string;
  onPress?: () => void;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center justify-center gap-x-2 rounded-xl bg-[#21C45D] py-4 shadow-lg shadow-green-500/50 ${className}`}>
      <Text className="text-lg font-bold text-[#0a1210]">{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}
