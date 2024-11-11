import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { TTemperatureProps } from './Temperature.types';

import styles from './Temperature.styles';

export default function Temperature({weatherSymbol, temperature, unit}: TTemperatureProps) {
  const formattedUnit = unit === 'celsius' ? '°C' : '°F';
  return (
    <View style={styles.container}>
      {weatherSymbol && 
        <Image
          style={styles.weatherSymbol}
          source={{ uri: `https://github.com/metno/weathericons/blob/89e3173756248b4696b9b10677b66c4ef435db53/weather/png/${weatherSymbol}.png?raw=true`}}
          testID="weatherSymbol"
        />
      }
      <Text style={styles.mainTemp} testID="temperatureCurrent">
        {temperature.curr}{unit && formattedUnit}
      </Text>

      <View style={styles.tempDetails}>
        <View style={styles.tempDetail} testID="temperatureHigh">
          <Text style={styles.tempDetailText}>High</Text>
          <Text style={styles.tempDetailTemp}>
            {temperature.max}{unit && formattedUnit}
          </Text>
        </View>
        
        <View style={styles.tempDetail} testID="temperatureLow">
          <Text style={styles.tempDetailText}>Low</Text>
          <Text style={styles.tempDetailTemp}>
            {temperature.min}{unit && formattedUnit}
          </Text>
        </View>
      </View>
    </View>
  )
};