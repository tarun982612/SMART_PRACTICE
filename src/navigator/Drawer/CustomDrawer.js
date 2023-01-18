import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Image} from 'react-native';
import GLOBALS from '../../assets';
import ImageLoad from 'react-native-image-placeholder';

const {FONTS, COLOR, IMAGE} = GLOBALS;

const CustomDraw = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: COLOR.PINK,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ImageLoad
                source={IMAGE.logo3}
                resizeMode="stretch"
                style={{width: 80,
                  height: 71,
                  margin: 5,
                  overflow: 'hidden',
                  borderRadius: 8}}></ImageLoad>
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          activeTintBackgroundColor={COLOR.PRIMARY}
          label="Profile"
          labelStyle={{fontSize: 20, fontFamily: FONTS.NunitoRegular}}
          onPress={() => navigation.navigate('Profile')}
        />

        <DrawerItem
          label="Logout"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'AuthStack',
                  state: {
                    routes: [
                      {
                        name: 'Login',
                      },
                    ],
                  },
                },
              ],
            });
          }}
          labelStyle={{fontSize: 20, fontFamily: FONTS.NunitoRegular}}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDraw;
