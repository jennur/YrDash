import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './PageHeader.styles';

export default function PageHeader({title}: {title: string}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          testID="backButton"
        >
          <Text>{"\<"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
};