import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { TLocation } from '../../types/Location.types';
import { TLocationListProps } from './LocationList.types';
import ListItem from './ListItem/ListItem';

import style from './LocationList.styles';

export default function LocationList({title, locations}: TLocationListProps) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      {locations.length === 0 && (
          <Text>No locations found</Text>
        ) || (
          locations.map((location: TLocation) => 
            <ListItem key={location.title} location={location} />)
      )}
    </View>
  )
};