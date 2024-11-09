import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TDetailProps } from './Detail.types';

import styles from './Detail.styles';

export default function Detail({title, value, unit}: TDetailProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}{unit && unit}</Text>
    </View>
  )
};