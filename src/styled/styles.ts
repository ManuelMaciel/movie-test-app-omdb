import styled from 'styled-components/native';

export const TextInputStyled=styled.TextInput`
    background-color: #FFF;
    border-width:1px;
    border-color:#707070;
    font-size:15px;
    borderBottomLeftRadius: 5px;
    borderTopLeftRadius: 5px;
    borderBottomRightRadius: 5px;
    borderTopRightRadius: 5px;
    color:#707070;
    minWidth: 75%;
    minHeight: 40px;
    maxHeight: 40px;
    margin-right: 3px;
    padding:4px;
`;

export const ButtonStyled=styled.TouchableOpacity`
    display:flex;
    background-color: #7209B7;
    justify-content:center;
    border-width:0.5px;
    border-color:#7209B7;
    borderBottomLeftRadius: 5px;
    borderTopLeftRadius: 5px;
    borderBottomRightRadius: 5px;
    borderTopRightRadius: 5px;
    align-items:center;
    minWidth: 60px;
    minHeight: 40px;
    maxHeight: 40px;
`;

export const TextButtonStyled=styled.Text`
    color: white;
    textAlign: center;
`;

export const CardContainerStyled=styled.View`
    backgroundColor: transparent;
    borderWidth:1px;
    borderRadius:15px;
`;

export const TitleStyled=styled.Text`
    fontSize: 15px;
    textAlign: center;
    fontWeight: bold;
    overflow: hidden;
    height:40px;
`;

export const TextDescriptionStyled=styled.Text`
    fontSize: 12px;
    textAlign: center;
    textTransform: capitalize;
`;

export const LoadingContainer=styled.View`
    flex: 1;
    backgroundColor: #00000011;
    justifyContent: center;
    alignItems:center;
`;
