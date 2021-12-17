import React from 'react';
import { registerRootComponent } from 'expo'
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MoviesContextProvider } from './src/context/MoviesContext';
import MovieTabs from './src/navigation/tabs/MovieTabs';
import { FavoriteMoviesContextProvider } from './src/context/FavoriteMoviesContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <MoviesContextProvider>
        <FavoriteMoviesContextProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <MovieTabs/>
            </NavigationContainer>
          </SafeAreaProvider>
        </FavoriteMoviesContextProvider>
      </MoviesContextProvider>
    </View>
  );
}

export default App


registerRootComponent(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});

const navigationHeaderStyle=(title:string)=>({ title,headerStyle: {backgroundColor: '#e9eaec'},headerTintColor:'#333652' })
