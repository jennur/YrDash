import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TTemperatureProps } from './Temperature.types';

import styles from './Temperature.styles';

export default function Temperature({weatherType, temperature}: TTemperatureProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTempText}>{weatherType}</Text>
      <Text style={styles.mainTemp}>{temperature.curr}°C</Text>

      <View style={styles.tempDetails}>
        <View style={styles.tempDetail}>
          <Text style={styles.tempDetailText}>High</Text>
          <Text style={styles.tempDetailTemp}>
            {temperature.max}°C
          </Text>
        </View>
        
        <View style={styles.tempDetail}>
          <Text style={styles.tempDetailText}>Low</Text>
          <Text style={styles.tempDetailTemp}>
            {temperature.min}°C
          </Text>
        </View>
      </View>
    </View>
  )
};