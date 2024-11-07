import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeDash, LocationDetails} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeDash} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
