import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Root from './navigator/root';
import COLOR from './assets/color';

const stack = createStackNavigator();
const App = () => {
  Platform.OS === 'android'
    ? StatusBar.setBackgroundColor(COLOR.PRIMARY)
    : null;
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
