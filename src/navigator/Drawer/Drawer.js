import React from 'react';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screen/user/profile';
import COLOR from '../../assets/color';
import Home from '../../screen/user/home';
import LeaderBoard from '../../screen/user/leaderBoard';
import Reminder from '../../screen/user/reminder';

const Draw = createDrawerNavigator();

export default function Drawernavigator() {
  return (
    <Draw.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        headerTintColor: 'white',
        //headerShown: false,
        headerLeft: () => {
          return (
            <Icon
              name="chevron-back"
              size={40}
              color="white"
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}
            />
          );
        },
        drawerLabelStyle: {fontSize: 20},
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'Nunito-Regular',
        },
        headerStyle: {
          backgroundColor: COLOR.PRIMARY,
          height: 60,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },
      })}>
      <Draw.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Draw.Screen name="Profile" component={Profile} />
      <Draw.Screen name="LeaderBoard" component={LeaderBoard} />
      <Draw.Screen name="Reminder" component={Reminder} />
    </Draw.Navigator>
  );
}
