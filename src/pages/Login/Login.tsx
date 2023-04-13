import React, {FC, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {LoginProps} from './types';
import {MainInput} from '../../components/molecules';
import styles from './styles';
import {MainButton} from '../../components';
import {theme} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {setName} from '../../redux/slice';
import {useDispatch} from 'react-redux';
import {SCREENS} from '../..';

export const Login: FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  const handleSubmmit = () => {
    if (userName.length < 2) {
      return;
    }
    dispatch(setName(userName));
    navigation.navigate(SCREENS.HOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Welcome to CodeLeap network!</Text>
        <MainInput
          value={userName}
          placeholder="joe doe"
          title="Please enter your username"
          onChangeText={setUserName}
        />
        <View style={styles.buttonContainer}>
          <MainButton
            color={theme.colors.white}
            borderColor={
              userName.length < 2 ? theme.colors.grey[200] : theme.colors.blue
            }
            onPress={() => {
              handleSubmmit();
            }}
            backgroundColor={
              userName.length < 2 ? theme.colors.grey[200] : theme.colors.blue
            }>
            ENTER
          </MainButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
