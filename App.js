import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#E3F2FD',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#1565C0',
    padding: 40,
  },
  football: {
    fontSize: 48,
    marginBottom: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    marginTop: 8,
    color: 'white',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#BBDEFB',
    padding: 12,
  },
  infoText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  content: {
    padding: 15,
  },
  questionBox: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#90CAF9',
    borderWidth: 2,
    marginBottom: 20,
  },
  question: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#1565C0',
    padding: 12,
    textAlign: 'center',
    marginBottom: 14,
  },
  photo: {
    width: 200,
    height: 200,
  },
  picker: {
    width: '100%',
    backgroundColor: '#BBDEFB',
    marginTop: 14,
    color: '#0D47A1',
  },
  submit: {
    backgroundColor: '#1565C0',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

const MyApp = () => {
  const [answer1, setAnswer1] = useState('-');
  const [answer2, setAnswer2] = useState('-');
  const [answer3, setAnswer3] = useState('-');

  return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.football}>⚽</Text>
            <Text style={styles.title}>{'FOOTBALL\nFACE-OFF'}</Text>
            <Text style={styles.subtitle}>Guess the player. Score a hat-trick!</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>3 PHOTOS</Text>
            <Text style={styles.infoText}>3 PLAYERS</Text>
            <Text style={styles.infoText}>3 POINTS</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.questionBox}>
              <Text style={styles.question}>01 | WHO IS THIS PLAYER?</Text>
              <Image source={{uri: 'https://img.redbull.com/images/c_crop,x_1396,y_0,h_3623,w_2718/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2026/6/1/zq5ycxgy2gw96xt3v7jo/neymar-junior-ultimate-soccer-challenge-sao-paulo'}} style={styles.photo} />
              <Picker selectedValue={answer1} onValueChange={(value) => setAnswer1(value)} style={styles.picker}>
                <Picker.Item label="-" value="-" />
                <Picker.Item label="Neymar Jr" value="Neymar" />
                <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                <Picker.Item label="Mbappe" value="Kylian Mbappe" />
              </Picker>
            </View>

            <View style={styles.questionBox}>
              <Text style={styles.question}>02 | WHO IS THIS PLAYER?</Text>
              <Image source={{uri: 'https://s.yimg.com/lo/mysterio/api/5b34f459cc6a0764a2106ba66cfebd3c75292b6f1b9636db2da7ae640e4b91e7/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_jpg/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fforbes_contributor_845%2F32be6f43018e74be33dbdd569ed73633'}} style={styles.photo} />
              <Picker selectedValue={answer2} onValueChange={(value) => setAnswer2(value)} style={styles.picker}>
                <Picker.Item label="-" value="-" />
                <Picker.Item label="Neymar Jr" value="Neymar" />
                <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                <Picker.Item label="Mbappe" value="Kylian Mbappe" />
              </Picker>
            </View>

            <View style={styles.questionBox}>
              <Text style={styles.question}>03 | WHO IS THIS PLAYER?</Text>
              <Image source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/ad9c52ee-a625-4722-959c-2d954893a6a9.jpeg?crop=1xw:1xh;center,top'}} style={styles.photo} />
              <Picker selectedValue={answer3} onValueChange={(value) => setAnswer3(value)} style={styles.picker}>
                <Picker.Item label="-" value="-" />
                <Picker.Item label="Neymar Jr" value="Neymar" />
                <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                <Picker.Item label="Mbappe" value="Kylian Mbappe" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.submit} onPress={() => {
              let score = 0;
              if (answer1 == 'Neymar') {
                score = score + 1;
              }
              if (answer2 == 'Lamine Yamal') {
                score = score + 1;
              }
              if (answer3 == 'Kylian Mbappe') {
                score = score + 1;
              }
              let message = 'Keep trying!';
              if (score == 2) {
                message = 'So close! One more for a hat-trick!';
              }
              if (score == 3) {
                message = 'Hat-trick! Well done!';
              }
              Alert.alert('Full-Time!', 'You got ' + score + '/3 correct.\n' + message);
            }}>
              <Text style={styles.submitText}>Submit Answers ⚽</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
};

export default MyApp;