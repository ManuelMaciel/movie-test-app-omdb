import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../../screens/FavoriteScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={navigationHeaderStyle('Favoritos')} name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen options={navigationHeaderStyle('Perfil')} name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const navigationHeaderStyle=(title:string)=>({ title,headerStyle: {backgroundColor: '#FBFBFF'},headerTintColor:'#560BAD' })
