import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RocketIcon from '@expo/vector-icons/Ionicons';
import UserIcon from '@expo/vector-icons/AntDesign';
import PaymentImg from '../../assets/payments.svg';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tap}>
          <Text style={styles.tapText}>TAP</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.rocketIcon}>
            <RocketIcon name='md-rocket' size={32} color='mediumslateblue' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.userIcon}>
            <UserIcon name='user' size={32} color='mediumslateblue' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 7, padding: 20 }}>
        <PaymentImg width={360} height={360} />
        <Text style={styles.payTxt}>Pay online or offline</Text>
        <Text style={styles.payTxt}>
          with just a{' '}
          <Text
            style={{
              color: 'mediumslateblue'
            }}
          >
            "tap"
          </Text>
        </Text>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardIcon}>
            <UserIcon name='creditcard' size={32} color='mediumslateblue' />
            <Text style={styles.cardIconTxt}>Tap to add a card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payBtnTxt}>Pay now</Text>
          <UserIcon name='arrowright' size={32} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 50
  },
  tap: {
    borderRadius: 50,
    borderColor: 'grey',
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  tapText: {
    fontSize: 20,
    color: 'mediumslateblue',
    fontFamily: 'roboto-bold'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  rocketIcon: {
    marginRight: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  payTxt: {
    fontSize: 35,
    color: 'darkslategrey',
    fontFamily: 'roboto-bolditalic'
  },
  cardContainer: {
    justifyContent: 'center',
    height: 90,
    alignSelf: 'center',
    width: 500,
    marginTop: 70,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  cardIcon: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30
  },
  cardIconTxt: {
    fontSize: 30,
    marginLeft: 30,
    fontFamily: 'roboto-bold',
    color: 'darkslategrey'
  },
  payBtn: {
    backgroundColor: 'mediumslateblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    alignSelf: 'center',
    width: 250,
    marginTop: 50,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  payBtnTxt: {
    fontSize: 25,
    padding: 10,
    color: 'white',
    fontFamily: 'roboto-bold'
  }
});
