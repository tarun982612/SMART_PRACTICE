import {
  ImageBackground,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GLOBALS from '../../assets';
import {getQuizzes} from '../../util/dataBase';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const Quizhome = ({navigation}) => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getQuizzes();

    let tempQuizzes = [];
    await quizzes.docs.forEach(async quiz => {
      await tempQuizzes.push({id: quiz.id, ...quiz.data()});
    });
    await setAllQuizzes([...tempQuizzes]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <ImageBackground style={styles.container} source={IMAGE.backImage}>
      <FlatList
        data={allQuizzes}
        onRefresh={getAllQuizzes}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={styles.listView}
        renderItem={({item: quiz}) => (
          <View style={styles.quizView}>
            <View style={styles.textView}>
              <Text style={styles.title}>{quiz.title}</Text>
              {quiz.description != '' ? (
                <Text style={styles.description}>{quiz.description}</Text>
              ) : null}
            </View>
          </View>
        )}
      />

      {/* <View style={styles.buttonView}>
        <TouchableOpacity>
          <Icon
            name="add-circle"
            size={100}
            color={COLOR.PRIMARY}
            onPress={() => {
              navigation.navigate('Createquiz');
            }}
          />
        </TouchableOpacity>
      </View> */}

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Createquiz');
          }}>
          <Image source={IMAGE.addquestion} style={{height: 80, width: 80}} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Quizhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  button: {
    width: '60%',
  },
  buttonView: {
    flexDirection: 'row-reverse',
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
  title: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 25,
  },
  description: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 18,
  },
});
