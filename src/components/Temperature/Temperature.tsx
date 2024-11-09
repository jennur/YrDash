import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { TTemperatureProps } from './Temperature.types';

import styles from './Temperature.styles';

export default function Temperature({weatherSymbol, temperature}: TTemperatureProps) {
  return (
    <View style={styles.container}>
      {weatherSymbol && 
        <Image
          style={styles.weatherSymbol}
          source={{ uri: `https://github.com/metno/weathericons/blob/89e3173756248b4696b9b10677b66c4ef435db53/weather/png/${weatherSymbol}.png?raw=true`}}
        />
      }
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