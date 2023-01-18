import {Text, View, ImageBackground, ToastAndroid} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IMAGE from '../../../assets/image/image';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import {useForm, Controller} from 'react-hook-form';
import styles from './style';
import {createQuiz} from '../../../util/dataBase';

const Createquiz = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const saveQuiz = async (data, e) => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuiz(currentQuizId, data.title, data.description);

    //navigate to add Question
    navigation.navigate('Question', {
      currentQuizId: currentQuizId,
    });

    // reset value
    reset({});
    ToastAndroid.show('Quiz saved', ToastAndroid.BOTTOM);
  };
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.heading}>Create Quiz</Text>
          <View style={styles.form}>
            <CustomInput
              label={'Title'}
              name="title"
              control={control}
              placeholder="Enter quiz title"
              rules={{
                required: 'Title is required',
              }}
            />
            <CustomInput
              label={'Description'}
              name="description"
              control={control}
              placeholder="Enter quiz description"
              rules={{
                required: 'Description is required',
              }}
            />
            <View style={styles.buttonView}>
              <CustomButton
                text={'Save Quiz'}
                onPress={handleSubmit(saveQuiz)}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Createquiz;
