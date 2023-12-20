import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import HappyMeals from './src/screens/HappyMeals/HappyMeals';
import Home from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
   return (
      <SafeAreaView style={styles.SafeArea}>
         <ThemeProvider theme={theme}>
            <NavigationContainer>
               <Stack.Navigator initialRouteName="happyMeals">
                  <Stack.Screen name="happyMeals" component={HappyMeals} options={{ headerShown: false }} />
                  <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
               </Stack.Navigator>
            </NavigationContainer>
         </ThemeProvider>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   SafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   },
});

export default App;
