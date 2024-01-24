import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet} from 'react-native';
import { Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import globalStyles from '../../assets/css';
import {primaryTextColor} from '../../assets/css/colors'
import HeaderComponent from '../../components/Header';

const {height, width} = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent />
      <View style={styles.container}>
        <Text style={globalStyles.textTitle}>News & Information</Text>
        <View style={styles.boxBanner}>
          <Image source={require('../../assets/img/banner_home.png')} style={styles.bannerHome}/>
          <Text style={styles.titleBanner}>Discover Your Serene Sanctuary</Text>
          <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum</Text>
        </View>
      </View>
      <View >
        <View style={styles.section}>
          <Text style={globalStyles.textTitle}>Find everything you need</Text>
          <Text style={globalStyles.viewMore}>View more</Text>
        </View>
      </View>
    </View>
  
  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: wp(6),
    marginRight: wp(18)
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    marginTop: 15
  },
  bannerHome: {
    resizeMode: 'cover',
    height: 150,  
    width: wp(85),
    marginTop: 10,
  },
  titleBanner: {
    fontSize: 18,
    color: primaryTextColor,
    fontWeight: 'bold',
    paddingTop: 6
  },
  desc: { 
    fontSize: 13
  },
  boxBanner: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 5,
    width: wp(88)
  }
});