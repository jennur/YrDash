import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { screenStyles } from '../../assets/styles/screen.styles';
import { TLocation } from '../../types/Location.types';
import { TLocationDetailsRouteProp } from '../../types/screen.types';

import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Temperature from '../../components/Temperature/Temperature';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function LocationDetails({route}: {route: TLocationDetailsRouteProp}) {
  const {location}: {location: TLocation} = route.params;

  return (
    <SafeAreaView style={screenStyles.screenWrapper}>
      <View style={screenStyles.contentWrapper}>
        <PageHeader title={location.title} />
      </View>
      <ScrollView style={screenStyles.contentWrapper}>
        <Temperature weatherType={location.weatherType} temperature={location.temperature} />
        <WeatherDetails {...location.weather} />
      </ScrollView>
    </SafeAreaView>
  )
};