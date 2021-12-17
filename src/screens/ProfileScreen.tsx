import React from 'react';
import { View } from 'react-native';
import { HomeContainer } from '../styled/screens/HomeStyles';
import { ButtonStyled, TextButtonStyled } from '../styled/styles';

const ProfileScreen=({navigation})=>{

    const onHandleHistory=()=>{

    }

    const onHandleFavorites=()=>{
        navigation.navigate('FavoriteScreen');
    }

    return(
        <HomeContainer>
            <ButtonStyled><TextButtonStyled>Historial</TextButtonStyled></ButtonStyled>
            <ButtonStyled onPress={onHandleFavorites}><TextButtonStyled>Favoritos</TextButtonStyled></ButtonStyled>
        </HomeContainer>
    )
}

export default ProfileScreen;
