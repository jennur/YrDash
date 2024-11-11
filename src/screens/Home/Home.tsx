import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import LocationList from '../../components/LocationList/LocationList';
import { isLocationResponse, TLocation, TLocationResponse } from '../../types/Location.types';
import { screenStyles } from '../../assets/styles/screen.styles';
import { getCurrentWeather } from '../../services/weatherService/weatherService';
import { TCity } from '../../types/Location.types';

import style from './Home.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_LOCATIONS_KEY } from '../../constants/storage.constants';

export default function HomeDash() {
  const [city, setCity] = useState<string>("");
  const [defaultLocations, setDefaultLocations] = useState<TLocation[]>([]);
  const [userLocations, setUserLocations] = useState<TLocation[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const setErrorWithTimeout = (message: string) => {
    if (errorTimeout) clearTimeout(errorTimeout);
    setErrorMessage(message);

    const timeout = setTimeout(() => setErrorMessage(""), 5000);
    setErrorTimeout(timeout);
  }

  const storeLocalData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.info('[storeLocalData] Data successfully stored!');
    } catch (error) {
      console.error('[storeLocalData]', error);
      setErrorMessage("Unable to store data locally");
    }
  }

  const getLocalData = async (key: string) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('[getLocalData]', error);
    }
  }

  const getDefaultLocations = async (): Promise<void> => {
    const defaultCities: TCity[] = ["london", "new york", "tokyo"];
    try {
      // Get stored user locations
      const storedUserLocations = await getLocalData(USER_LOCATIONS_KEY) || [];
      setUserLocations(storedUserLocations);

      // Get default locations
      const locationData: TLocation[] = await Promise.all(
        defaultCities.map(async (name: TCity) => {
          const weatherData: TLocationResponse | Error = await getCurrentWeather(name);
          if (isLocationResponse(weatherData)) return weatherData.data;
          else throw new Error("Unable to retrieve default location data");
        })
      );

      setDefaultLocations(locationData);
    } catch (error) {
      console.error("[getDefaultLocations]", error);
      setErrorWithTimeout("Unable to retrieve results for default locations");
    }
  }

  const addUserLocation = async (): Promise<void> => {
    setErrorMessage("");

    if (!city) return setErrorWithTimeout("Please provide a location to search");

    try {
      const alreadyListed = userLocations.find(location => location.title === city);

      if (alreadyListed) return setErrorWithTimeout("This location is already in your list");

      // Fetch and add user provided location to the UI, store it locally
      const userLocation = await getCurrentWeather(city);

      if (userLocation instanceof Error) return setErrorWithTimeout(userLocation.message);

      const updatedUserLocations = [userLocation?.data, ...userLocations];

      setUserLocations(updatedUserLocations);
      storeLocalData(USER_LOCATIONS_KEY, updatedUserLocations);
    } catch (error) {
      console.error("[addUserLocation]", error);
      setErrorWithTimeout("Unable to find results for the given location");
    }
  }

  const handleCityInput = (city: string): void => {
    // Remove all whitespace before/after and convert to lowercase before proceeding
    city = city.trimEnd().trimStart().toLowerCase();
    setCity(city);
  }

  useEffect(() => {
    // Get default locations on load
    getDefaultLocations();
  }, [])

  return (
    <SafeAreaView style={screenStyles.screenWrapper}>
      <ScrollView style={screenStyles.contentWrapper}>
        <View style={style.searchBar}>
          <TextInput
            style={style.searchInput}
            onChangeText={handleCityInput}
            testID="cityInput"
          />
          <TouchableOpacity
            onPress={addUserLocation}
            style={style.searchButton}
          >
            <Text style={style.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={style.errorMessage}
          >
            {errorMessage}
          </Text>
        </View>
        {userLocations.length !== 0 && 
          <LocationList title="Your locations" locations={userLocations} />
        }

        {defaultLocations.length !== 0 && 
          <LocationList title="Popular locations" locations={defaultLocations} />
        }
      </ScrollView>
    </SafeAreaView>
  )
};