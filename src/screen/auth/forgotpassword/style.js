import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    marginHorizontal: 15,
    elevation: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 40,
  },
  logo: {
    marginTop: 10,
    height: 300,
    width: '80%',
    maxWidth: 500,
  },
  heading: {
    alignSelf: 'center',
    color: COLOR.PRIMARY,
    fontFamily: FONTS.NunitoBold,
    fontSize: 40,
  },
  subHeading: {
    color: COLOR.BLACK,
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
  },
  coverView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  btn: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 40,
    color: COLOR.PRIMARY,
  },
  imageView: {
    alignItems: 'center',
  },
  link: {
    color: COLOR.WHITE,
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
  },
  links: {
    alignSelf: 'center',
    color: COLOR.PINK,
    fontFamily: FONTS.NunitoBold,
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLOR.WHITE,
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 10,
  },
  buttonTitle: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 30,
    padding: 12,
    borderRadius: 10,
    color: COLOR.PRIMARY,
  },
  buttonView: {
    alignItems: 'center',
  },
  forgotpass: {
    alignSelf: 'flex-end',
    marginRight: 20,
    color: COLOR.BLACK,
    fontFamily: FONTS.NunitoBold,
    fontSize: 18,
  },
});
export default styles;
