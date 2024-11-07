import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TWeatherDetailsProps } from './WeatherDetails.types';
import Detail from './Detail/Detail';

export default function WeatherDetails({
  sunset,
  sunrise,
  humidity,
  visibility
}: TWeatherDetailsProps) {
  return (
    <View>
      <Detail title={"Sunrise"} value={sunrise}/>
      <Detail title={"Sunset"} value={sunset}/>
      <Detail title={"Humidity"} value={humidity}/>
      <Detail title={"Visibility"} value={visibility}/>
    </View>
  )
};