import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { TLocationSummary } from '../../../types/Location.types';

export default function ListItem({title, temperature}: TLocationSummary) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{temperature.curr}</Text>
    </View>
  )
};