import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TWeatherDetailsProps } from './WeatherDetails.types';
import Detail from './Detail/Detail';

import styles from './WeatherDetails.styles';

export default function WeatherDetails({
  sunset,
  sunrise,
  humidity,
  pressure,
  units,
}: TWeatherDetailsProps) {
  return (
    <View style={styles.container}>
      <Detail title={"Sunrise"} value={sunrise} />
      <Detail title={"Sunset"} value={sunset} />
      <Detail title={"Humidity"} value={humidity} unit={units.humidity}/>
      <Detail title={"Air Pressure"} value={pressure} unit={units.pressure} />
    </View>
  )
};