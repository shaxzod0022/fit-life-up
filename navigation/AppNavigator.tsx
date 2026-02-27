import React from 'react';
import { RootStackParamList } from 'types/navigation.interface';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from 'screens/LoadingScreen';
import WelcomeScreen from 'screens/WelcomeScreen';
import RegisterScreen from 'screens/RegisterScreen';
import LoginScreen from 'screens/LoginScreen';
import OTPScreen from 'screens/OTPScreen';
import PersonalInfoScreen from 'screens/PersonalInfoScreen';
import GoalScreen from 'screens/GoalScreen';
import FrequencyScreen from 'screens/FrequencyScreen';
import TabNavigator from './TabNavigator';
import PrivacyPolicyScreen from 'screens/PrivacyScreen';
import TermsOfServiceScreen from 'screens/TermsOfServiceScreen';
import EditProfileScreen from 'screens/EditProfileScreen';
import NotificationsScreen from 'screens/NotificationsScreen';
import NotificationSettingsScreen from 'screens/NotificationSettingsScreen';
import SleepAnalysisScreen from 'screens/SleepAnalysisScreen';
import WorkoutsScreen from 'screens/WorkoutScreen';
import WorkoutPlayerScreen from 'screens/WorkoutPlayerScreen';
import WorkoutSummaryScreen from 'screens/WorkoutSummaryScreen';

const Stack = createStackNavigator<RootStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="Goal" component={GoalScreen} />
      <Stack.Screen name="Frequency" component={FrequencyScreen} />
      <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms" component={TermsOfServiceScreen} />
      {/* Tab Bar */}
      <Stack.Screen name="Main" component={TabNavigator} />
      {/* Tab Bar-siz ochiladigan ichki sahifalar */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen name="SleepAnalysis" component={SleepAnalysisScreen} />
      <Stack.Screen name="Workouts" component={WorkoutsScreen} />
      <Stack.Screen name="WorkoutPlayer" component={WorkoutPlayerScreen} />
      <Stack.Screen name="WorkoutSummary" component={WorkoutSummaryScreen} />
    </Stack.Navigator>
  );
}
