import styled from 'styled-components/native';

export const MovieTextInfo = styled.Text`
    fontSize: 12px;
    textAlign: left;
    textTransform: capitalize;
    color: #777;
`;

export const MovieTitle = styled.Text`
    fontSize: 28px;
    textAlign: center;
    fontWeight: bold;
    color: black;
`;

export const MovieContainer = styled.View`
    flex: 1;
    backgroundColor: #F5F4F6;
`
export const TextContainer = styled.View`
    flex: 1;
    padding: 20px;
`

export const ImageContainer = styled.Image`
    marginTop: 5%;
    width: 75%;
    alignSelf: center;
    flexGrow: 1;
    flexBasis: 0;
    borderRadius: 30px;
`;

export const TextPlot = styled.Text`
    fontSize: 14px;
    textTransform: capitalize;
    textAlign: center;
    padding: 10px;
    color: #707070;
`;

export const TextGenre = styled.Text`
    fontSize: 14px;
    textTransform: capitalize;
    textAlign: center;
    padding: 10px;
    fontWeight: bold;
    color: #560BAD;
`;
