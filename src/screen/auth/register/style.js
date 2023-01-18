import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    marginHorizontal: 15,
    elevation: 10,
    marginVertical: 10,
    marginTop: 50,
    padding: 15,
    borderRadius: 40,
  },
  logo: {
    marginTop: 10,
    height: 100,
    width: '40%',
    maxWidth: 500,
    marginLeft: 25,
  },
  heading: {
    alignSelf: 'center',
    fontFamily: FONTS.NunitoBold,
    fontSize: 40,
  },
  buttonView: {
    flex: 0.5,
    backgroundColor: COLOR.PRIMARY,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  button: {
    backgroundColor: COLOR.WHITE,
    width: '80%',
    alignSelf: 'center',
    padding: 15,

    alignItems: 'center',
    borderRadius: 50,
  },
  buttontext: {
    fontWeight: '900',
    color: COLOR.PRIMARY,
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
  },
  Imageview: {
    flex: 1,
  },
  link: {
    color: COLOR.WHITE,
    alignSelf: 'center',
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    marginBottom: 20,
  },
});
export default styles;
