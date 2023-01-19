import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 40,
    fontFamily: FONTS.NunitoBold,
    marginHorizontal: 20,
  },
  heading1: {
    marginTop: 10,
    marginLeft: 25,
    fontFamily: FONTS.NunitoBold,
    fontSize: 18,
  },
  container1: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: COLOR.PRIMARY,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  form: {
    backgroundColor: COLOR.WHITE,
    elevation: 10,
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  buttonView: {
    marginTop: 20,
  },
});
export default styles;
