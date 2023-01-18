import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import COLOR from '../../../assets/color';
import React from 'react';
import IMAGE from '../../../assets/image/image';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../../../components/customInput';
import styles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FirebaseResetPassword} from '../../../util/auth';

const Login = ({navigation}) => {
  Platform.OS === 'android'
    ? StatusBar.setBackgroundColor(COLOR.PRIMARY)
    : null;
  const {height} = useWindowDimensions();
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onPressReset = data => {
    FirebaseResetPassword(data.email, navigation);
  };
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.imageView}>
          <Image
            source={IMAGE.logo2}
            style={[styles.logo, {height: height * 0.2}]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.coverView}>
          <View style={styles.loginView}>
            <Text style={styles.heading}>Forgot Password</Text>
            <CustomInput
              label={'Email'}
              name="email"
              control={control}
              placeholder="Enter email"
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onPressReset)}>
              <Text style={styles.buttonTitle}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
