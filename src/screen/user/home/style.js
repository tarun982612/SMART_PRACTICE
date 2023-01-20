import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'pink',
  },
  quizView: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    elevation: 10,
  },
  textView: {
    flex: 1,
    paddingRight: 10,
  },
  textView1: {
    flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 25,
  },
  description: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 18,
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 20,
    fontFamily: FONTS.NunitoBold,
  },
  quizView1: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    elevation: 10,
  },
  messView: {
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  messText: {fontFamily: FONTS.NunitoBold, fontSize: 15, color: 'red'},
});
export default styles;
