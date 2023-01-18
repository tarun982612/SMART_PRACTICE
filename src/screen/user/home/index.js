import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import IMAGE from '../../../assets/image/image';
import GLOBALS from '../../../assets';
import {getQuizzes} from '../../../util/dataBase';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const {FONTS, COLOR} = GLOBALS;

const Home = ({navigation}) => {
  Platform.OS === 'android' ? StatusBar.setBackgroundColor(COLOR.PINK) : null;

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
    <ImageBackground style={{flex: 1}} source={IMAGE.homebackground}>
      <ScrollView>
        <Icon
          name="apps"
          size={40}
          color="white"
          style={{margin: 20}}
          onPress={() => navigation.openDrawer()}
        />
        <View style={{flex: 1, marginTop: 20}}>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 0,
              fontFamily: FONTS.NunitoBold,
              color: COLOR.WHITE,
            }}>
            Welcome back Tarun !
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF',
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#345c74"
            style={{
              fontFamily: 'Bold',
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12,
            }}
          />
          <Image source={IMAGE.sear} style={{height: 14, width: 14}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF2F2',
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#345c74',
                fontSize: 20,
                fontFamily: 'Bold',
                width: 250,
                paddingRight: 100,
              }}>
              Start learning new Staff
            </Text>
            <TouchableOpacity
              onPress={() => Alert}
              style={{
                flexDirection: 'row',
                backgroundColor: '#f58084',
                alignItems: 'center',
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Bold',
                  fontSize: 12,
                }}>
                Categories
              </Text>
              <Image
                source={IMAGE.logo2}
                style={{marginLeft: 20, width: 8, height: 8}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={IMAGE.undraw}
            style={{marginLeft: -80, marginTop: 35}}
          />
        </View>
        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Bold',
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}>
          Play Quiz
        </Text>
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
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('PlayQuiz', {
                    quizId: quiz.id,
                  });
                }}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
