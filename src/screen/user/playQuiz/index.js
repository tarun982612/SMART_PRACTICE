import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import CustomButton from '../../../components/customButton';
import GLOBALS from '../../../assets';
import ResultModal from '../../../components/resultmodal';
const {width} = Dimensions.get('window');

const {IMAGE, COLOR} = GLOBALS;

import {getQuestionByQuizId, getQuizById} from '../../../util/dataBase';
import {color} from 'react-native-reanimated';

const PlayQuiz = ({navigation, route}) => {
  Platform.OS === 'android'
    ? StatusBar.setBackgroundColor(COLOR.PRIMARY)
    : null;

  const [currentQuizId, setCurrentQuizId] = useState(route.params.quizId);
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const getOptionColor = (currentQuestion, currentOpton) => {
    if (currentQuestion.selectedOption) {
      if (currentOpton == currentQuestion.selectedOption) {
        return COLOR.PINK;
      }
    }
  };

  const getOptionTextColor = (currentQuestion, currentOption) => {
    if (currentQuestion.selectedOption) {
      if (currentOption == currentQuestion.selectedOption) {
        return COLOR.WHITE;
      } else {
        return COLOR.BLACK;
      }
    } else {
      return COLOR.BLACK;
    }
  };

  const getQuizAndQuestionDetails = async () => {
    // Get Quiz
    let currentQuiz = await getQuizById(currentQuizId);
    currentQuiz = currentQuiz.data();
    setTitle(currentQuiz.title);

    // Get Questions for current quiz
    const questions = await getQuestionByQuizId(currentQuizId);

    // Transform and shuffle options
    let tempQuestions = [];
    await questions.docs.forEach(async res => {
      let question = res.data();

      // Create Single array of all options and shuffle it

      question.allOption = shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      console.log(question.allOption);
      await tempQuestions.push(question);
    });

    setQuestions([...tempQuestions]);
  };

  useEffect(() => {
    getQuizAndQuestionDetails();
  }, []);

  return (
    <ImageBackground
      source={IMAGE.backImage}
      style={{
        flex: 1,
      }}>
      <Text style={styles.quizTitle}>{title}</Text>

    <View style={styles.coverView}>

      <FlatList
        horizontal
        ref={ref}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x / width;
          setCurrentIndex(x.toFixed(0));
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        data={questions}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.question}
        renderItem={({item, index}) => (
          <View style={styles.quizView}>
            <View style={styles.questionView}>
              <Text style={styles.question}>
                {index + 1}. {item.question}
              </Text>
              <View style={styles.optionView}>
                {item.allOption.map((option, optionIndex) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.optionButton,
                        {backgroundColor: getOptionColor(item, option)},
                      ]}
                      onPress={() => {
                        if (item.selectedOption) {
                          return null;
                        }
                        if (option == item.correct_answer) {
                          setCorrectCount(correctCount + 1);
                        } else {
                          setIncorrectCount(incorrectCount + 1);
                        }
                        let tempQuestions = [...questions];
                        tempQuestions[index].selectedOption = option;
                        setQuestions([...tempQuestions]);
                      }}>
                      <Text
                        style={[
                          styles.option,
                          {color: getOptionTextColor(item, option)},
                        ]}>
                        {optionIndex + 1}.
                      </Text>
                      <Text
                        style={[
                          styles.option,
                          {color: getOptionTextColor(item, option)},
                        ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={() => {
          <CustomButton text={'sumbit'} />;
        }}
      />
      <View style={styles.bottom}>
        {currentIndex > 0 ? (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              ref.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 1,
              });
            }}>
            <Text style={styles.buttonTitle}>Previous</Text>
          </TouchableOpacity>
        ) : null}
        {currentIndex < questions.length - 1 ? (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              if (currentIndex < questions.length - 1) {
                ref.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) + 1,
                });
              }
            }}>
            <Text style={styles.buttonTitle}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.submitButton}>
            <Text
              style={styles.buttonTitle}
              onPress={() => {
                setIsResultModalVisible(true);
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ResultModal
        isModalVisible={isResultModalVisible}
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        totalCount={questions.length}
        handleOnClose={() => {
          setIsResultModalVisible(false);
        }}
        handleHome={() => {
          navigation.navigate('Home');
        }}
      />
      </View>
    </ImageBackground>
  );
};

export default PlayQuiz;
