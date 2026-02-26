import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export const RadialBackground = () => (
  <View style={StyleSheet.absoluteFillObject}>
    <Svg height="100%" width="100%">
      <Defs>
        {/* Chap pastki burchakdagi graduent */}
        <RadialGradient
          id="grad1"
          cx="0%"
          cy="100%"
          rx="100%"
          ry="100%"
          fx="0%"
          fy="100%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#21C45D" stopOpacity="0.05" />
          <Stop offset="0.5" stopColor="#21C45D" stopOpacity="0" />
        </RadialGradient>

        {/* O'ng yuqori burchakdagi graduent */}
        <RadialGradient
          id="grad2"
          cx="100%"
          cy="0%"
          rx="100%"
          ry="100%"
          fx="100%"
          fy="0%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#21C45D" stopOpacity="0.15" />
          <Stop offset="0.6" stopColor="#21C45D" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      
      {/* Asosiy fon */}
      <Rect x="0" y="0" width="100%" height="100%" fill="#0a1210" />
      {/* Graduentlarni ustma-ust qo'yish */}
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad2)" />
    </Svg>
  </View>
);