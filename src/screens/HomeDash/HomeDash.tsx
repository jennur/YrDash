import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import LocationList from '../../components/LocationsList/LocationsList';
import { TLocationSummary } from '../../types/Location.types';
import { screenStyles } from '../../assets/styles/screen.styles';

export default function HomeDash({navigation}: any) {
  const mockLocations: TLocationSummary[] = [
    {
      title: 'Location 1',
      temperature: {
        curr: 25,
        min: 20,
        max: 30,
      },
    },
    {
      title: 'Location 2',
      temperature: {
        curr: 20,
        min: 15,
        max: 25,
      },
    },
    {
      title: 'Location 3',
      temperature: {
        curr: 30,
        min: 25,
        max: 35,
      },
    }
  ]

  return (
    <SafeAreaView style={screenStyles.screenWrapper}>
      <ScrollView style={screenStyles.contentWrapper}>
        <Text>Home Dashboard</Text>
        <LocationList locations={mockLocations} />
      </ScrollView>
    </SafeAreaView>
  )
};