import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '90%',
    height: '90%',
  },
  logoView: {
    flex: 0.6,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonView: {
    flex: 0.9,
    backgroundColor: COLOR.PRIMARY,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 10,
  },
  button: {
    backgroundColor: COLOR.WHITE,
    alignSelf: 'flex-start',
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
  heading: {
    color: COLOR.WHITE,
    marginHorizontal: 30,
    fontSize: 60,
    fontFamily: FONTS.NunitoBold,
    marginBottom: 25,
  },
});
export default styles;
