import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeProps} from './types';

export const Home: FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>ola munda</Text>
    </SafeAreaView>
  );
};
