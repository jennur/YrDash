import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Temperature from '../../components/Temperature/Temperature';
import { screenStyles } from '../../assets/styles/screen.styles';
import { TLocation } from '../../types/Location.types';
import { TLocationDetailsRouteProp } from '../../types/screen.types';
import { useNavigation } from '@react-navigation/native';

export default function LocationDetails({route}: {route: TLocationDetailsRouteProp}) {
  const navigation = useNavigation();
  const {location}: {location: TLocation} = route.params;

  return (
    <SafeAreaView style={screenStyles.screenWrapper}>
      <View style={screenStyles.contentWrapper}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text>{location.title}</Text>
      </View>
      <ScrollView style={screenStyles.contentWrapper}>
        <Temperature weatherType={location.weatherType} temperature={location.temperature} />
        <WeatherDetails {...location.weather} />
      </ScrollView>
    </SafeAreaView>
  )
};