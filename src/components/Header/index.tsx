import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function HeaderComponent() {
  return (
    <View style={{width: wp('100%')}}>
        <ImageBackground source={require('../../assets/img/banner.png')} style={styles.background}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image source={require('../../assets/img/profile.png')} style={styles.profile}/>
            <View style={styles.contentWelcome}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.welcomeName}>tamara</Text>
            </View>
          </View>
          <View style={styles.headerContent}>
            <Image source={require('../../assets/img/icons/icon_bell.png')} style={styles.iconsHeader}/>
            <Image source={require('../../assets/img/icons/icon_chat.png')} style={styles.iconsHeader}/>
          </View>
        </View>
        <View style={styles.headerLocation}>
            <Image source={require('../../assets/img/icons/icon_location.png')} style={styles.iconsHeader}/>
            <Text style={styles.location}>Lengkong Karya - Tangerang Selatan</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header: {
      marginTop: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
      marginRight: 20
    },
    headerLocation: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: wp(8)
      
    },
    background: {
      width: wp(100),
      height: hp(25),
    },
    headerContent: {
      flexDirection: 'row'
    },
    contentWelcome: {
      padding: 10
    },
    welcome: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    welcomeName: {
      color: 'white',
      fontSize: 13
    },
    profile: {
      width: 60,
      height: 60
    },
    iconsHeader: {
      width: 25,
      height: 25,
      margin: 5
    },
    location: {
      color: 'white',
      paddingTop: 8,
      fontSize: 12,
    }
  });