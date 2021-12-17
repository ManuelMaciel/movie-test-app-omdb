import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MovieStack from '../stack/MovieStack';
// import FavoriteScreen from '../../screens/FavoriteScreen';
import ProfileStack from '../stack/ProfileStack';

const Tab = createBottomTabNavigator();

const MovieTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Inicio" component={MovieStack} />
        <Tab.Screen name="Favoritos" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MovieTabs;

const screenOptions=({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = (route.name === 'Inicio') ? 'ios-list' : 'star-outline';
      color = focused? '#560BAD' : 'black'
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });
const tabBarOptions={
    activeTintColor: '#560BAD',
    inactiveTintColor: 'gray',
}
