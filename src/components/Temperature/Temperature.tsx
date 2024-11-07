import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TTemperatureProps } from './Temperature.types';

export default function Temperature({weatherType, temperature}: TTemperatureProps) {
  return (
    <View>
      <Text>{weatherType}</Text>
      <Text>{temperature.curr}</Text>
      <Text>H:{temperature.max} L:{temperature.min}</Text>
    </View>
  )
};