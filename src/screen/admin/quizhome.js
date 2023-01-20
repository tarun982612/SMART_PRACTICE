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
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const Quizhome = ({navigation}) => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  var currentdate = moment().format('D MMM YYYY').toString();
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
        renderItem={({item: quiz}) => {
          if (currentdate >= quiz.date) {
            return (
              <View style={styles.quizView1}>
                <View style={styles.textView}>
                  <View
                    style={{
                      flexWrap: 'wrap',
                    }}>
                    <Text style={styles.title}>{quiz.title}</Text>
                    {quiz.description != '' ? (
                      <Text style={styles.description}>{quiz.description}</Text>
                    ) : null}
                  </View>
                  <View style={styles.messView}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="ellipse" size={10} color="red" />
                      <Text style={styles.btnInactive}> Inactive</Text>
                    </View>
                    <Text style={{fontFamily: FONTS.NunitoBold, fontSize: 15}}>
                      {quiz.date}
                    </Text>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.quizView}>
                <View style={styles.textView}>
                  <View
                    style={{
                      flexWrap: 'wrap',
                    }}>
                    <Text style={styles.title}>{quiz.title}</Text>
                    {quiz.description != '' ? (
                      <Text style={styles.description}>{quiz.description}</Text>
                    ) : null}
                  </View>
                  <View style={styles.messView}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="ellipse" size={10} color="#00FF7F" />
                      <Text style={styles.btnActive}> Active</Text>
                    </View>

                    <Text>{quiz.date}</Text>
                  </View>
                </View>
              </View>
            );
          }
        }}
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
  textView: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  messView: {
    justifyContent: 'space-between',
  },
  btnInactive: {
    color: 'red',
    alignSelf: 'flex-end',
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
  },
  btnActive: {
    color: COLOR.PRIMARY,
    alignSelf: 'flex-end',
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
  },
});
