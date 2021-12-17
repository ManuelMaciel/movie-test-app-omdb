import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadingContainer } from '../styled/styles';

const LoadingComponent = ({ isLoading,children }) => {
  return isLoading ? (
    <LoadingContainer>
      <ActivityIndicator size={'large'} color={'#20BF55'}/>
    </LoadingContainer>
  ) : (
    children
  );
};

export default React.memo(LoadingComponent);
