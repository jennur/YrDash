import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import { TLocationSummary } from '../../types/Location.types';
import { TLocationListProps } from './LocationList.types';
import ListItem from './ListItem/ListItem';

// import style from './LocationList.styles';

export default function LocationList({locations}: TLocationListProps) {

  return (
    <ScrollView>
      <Text>Locations</Text>
      {locations.map((location: TLocationSummary) => 
       <ListItem key={location.title} title={location.title} temperature={location.temperature} />
      )}
    </ScrollView>
  )
};