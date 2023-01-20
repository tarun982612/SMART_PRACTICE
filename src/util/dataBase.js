import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export const createQuiz = (currentQuizId, title, description, time, date) => {
  return firestore().collection('quizes').doc(currentQuizId).set({
    title,
    description,
    time,
    date,
  });
};

export const createQuestion = (currentQuizId, currentQuestionId, question) => {
  return firestore()
    .collection('quizes')
    .doc(currentQuizId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

export const getQuizzes = () => {
  return firestore().collection('quizes').get();
};

export const getQuizById = currentQuizId => {
  return firestore().collection('quizes').doc(currentQuizId).get();
};

export const getQuestionByQuizId = currentQuizId => {
  return firestore()
    .collection('quizes')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};
