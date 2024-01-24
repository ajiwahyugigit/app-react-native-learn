import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import globalStyles from '../../assets/css';

const {height, width} = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.main}>
        <View style={styles.sectionLeft}></View>
        <View style={styles.sectionRight}>
          <Text style={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dicta veniam voluptate assumenda impedit accusantium, earum blanditiis odit sint dolorum accusamus dolor eum repudiandae nulla magnam? Minima nostrum, vero sequi beatae est nesciunt voluptatem repellat necessitatibus! Neque nisi error fugiat quisquam accusamus ullam illum nam dignissimos, incidunt necessitatibus sed debitis, exercitationem culpa hic! Beatae esse quis vero dolore! Sequi qui ab, ratione natus tempora perspiciatis corporis, laborum quo adipisci, veniam aut labore asperiores quasi enim facilis officia rem quibusdam odio repellendus! In possimus rerum hic voluptatibus vero tempore autem, iste itaque veritatis sunt quidem est? Libero labore voluptas accusamus dolorem excepturi distinctio perferendis nulla doloremque nam corrupti? Sunt velit quibusdam impedit, deserunt dignissimos accusantium. Explicabo culpa esse excepturi asperiores laudantium nihil, mollitia id earum quos tenetur illum, repellendus atque. Deleniti porro perferendis, sapiente repellendus repellat facere quos nostrum aliquid magni neque, quod expedita. Nam fugit non inventore atque saepe aliquam beatae deleniti molestias incidunt deserunt, aut ut est iste dolorum quidem laborum dicta officia esse repellendus? Rerum excepturi sequi voluptas atque. Enim autem molestias quod. Cumque repellendus assumenda sequi ipsa vitae earum reiciendis, ea iusto veniam autem ipsum aspernatur aliquam necessitatibus? Rem tempora nisi quod! Totam suscipit in quo mollitia.</Text>
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    // height: hp(100),
    flex: 1,
    gap: 3
  },
  header: {
    // height: hp(15),
    flex: 1,
    backgroundColor: 'skyblue'
  },
  main: {
    // height: hp(70),
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 3
  },
  sectionLeft: {
    // width: wp(50),
    flex: 1,
    backgroundColor: '#111'
  },
  sectionRight: {
    // width: wp(50),
    flex: 6,
    backgroundColor: 'tomato'
  },
  content : {
    fontSize: hp(2),
    padding: 20,
    color: '#333'
  },
  footer: {
    // height: hp(15),
    flex: 1,
    backgroundColor: 'red'
  },
});