import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TDetailProps } from './Detail.types';

export default function Detail({title, value}: TDetailProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
};