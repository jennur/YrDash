import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';
import {TLocation} from '../../types/Location.types';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Temperature from '../../components/Temperature/Temperature';

export default function LocationDetails({navigation, route}: any) {

  const location: TLocation = route.params;

  return (
    <SafeAreaView>
      <View>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text>{location.title}</Text>
      </View>
      <ScrollView>
        <Temperature weatherType={location.weatherType} temperature={location.temperature} />
        <WeatherDetails {...location.weather} />
      </ScrollView>
    </SafeAreaView>
  )
};