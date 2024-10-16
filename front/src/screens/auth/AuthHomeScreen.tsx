import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {authNaviagtions} from '../../constants';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigations/AuthStackNavigator';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNaviagtions.AUTH_HOME>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps){
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인"
          onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
        />
         <CustomButton
          label="회원가입"
          variant= "outlined"
          onPress={() => navigation.navigate(authNaviagtions.SIGN_UP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
