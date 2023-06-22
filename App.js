import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    {/* <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
    </NavigationContainer>
  );
}