import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './ListItem.styles';
import { TListItemProps } from './ListItem.types';

export default function ListItem({location}: TListItemProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.container} onPress={() => navigation.navigate("LocationDetails", { location })}>
      <Text style={style.title}>{location.title}</Text>
      <Text style={style.temp}>{location?.temperature?.curr} °C</Text>
    </TouchableOpacity>
  )
};
