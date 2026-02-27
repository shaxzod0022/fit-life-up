// types/navigation.ts fayli
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Asosiy: undefined;
  Mashqlar: undefined;
  Ovqat: undefined;
  Uyqu: undefined;
  Profil: undefined;
};

export type RootStackParamList = {
  Loading: undefined;
  Main: NavigatorScreenParams<TabParamList>;
  SleepAnalysis: { sessionId: string };
  Workouts: { exerciseId: string };
  EditProfile: undefined;
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  OTP: { phoneNumber: string; login?: boolean };
  PersonalInfo: undefined;
  Goal: undefined;
  Frequency: undefined;
  Privacy: undefined;
  Terms: undefined;
  Notifications: undefined;
  NotificationSettings: undefined;
  WorkoutPlayer: { exerciseId: string };
};

export type AppTabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  StackScreenProps<RootStackParamList>
>;
