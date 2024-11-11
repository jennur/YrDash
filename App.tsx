import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, LocationDetails} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
