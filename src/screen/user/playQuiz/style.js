import {StyleSheet, Dimensions} from 'react-native';
import GLOBALS from '../../../assets';
const {height, width} = Dimensions.get('window');
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  quizTitle: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: FONTS.NunitoBold,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  quizView: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  questionView: {
    marginTop: 25,
    padding: 15,
    paddingTop: 25,
    justifyContent: 'center',
    height: '60%',
    elevation: 50,
    borderRadius: 40,
    width: '90%',
    backgroundColor: COLOR.WHITE,
  },
  question: {
    fontSize: 25,
    fontFamily: FONTS.NunitoRegular,
    fontWeight: 'bold',
  },
  optionView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  option: {
    fontSize: 20,
    fontFamily: FONTS.NunitoRegular,
    padding: 5,
  },
  optionButton: {
    flexDirection: 'row',
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  nextButton: {
    width: '48%',
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 20,
    padding: 15,
    color: COLOR.PRIMARY,
    fontFamily: FONTS.NunitoBold,
  },
  submitButton: {
    width: '48%',
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  coverView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});
export default styles;
