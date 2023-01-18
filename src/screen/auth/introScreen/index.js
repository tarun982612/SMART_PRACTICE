import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './style';
import IMAGE from '../../../assets/image/image';
const IntroScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.content}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={IMAGE.logo} resizeMode="contain" />
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.heading}>Welcome !</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTitle}>START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default IntroScreen;
