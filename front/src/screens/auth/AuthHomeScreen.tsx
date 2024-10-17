import React from 'react';
import {Button, SafeAreaView, StyleSheet, View, Image, Dimensions} from 'react-native';
import {authNaviagtions} from '../../constants';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNaviagtions.AUTH_HOME>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/main_logo.png')} />
      </View>
      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
  }
});

export default AuthHomeScreen;
