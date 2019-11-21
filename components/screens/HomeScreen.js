import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import RocketIcon from '@expo/vector-icons/Ionicons';
import UserIcon from '@expo/vector-icons/AntDesign';
import PaymentImg from '../../assets/payments.svg';

class HomeScreen extends Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imgHeight = Math.round((dimensions.width * 9) / 16);
    const imageWidth = dimensions.width;
    return (
      <View
        style={{
          flex: 1
        }}
      >
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

        <View style={styles.payContainer}>
          <PaymentImg width={imageWidth} height={imgHeight} />
          <View style={{ flex: 1 }}>
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
          </View>
        </View>

        <View style={styles.tapContainer}>
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardIcon}>
              <UserIcon name='creditcard' size={32} color='mediumslateblue' />
              <Text style={styles.cardIconTxt}>Tap to add a card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tapContainer}>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnTxt}>Pay now</Text>
            <UserIcon name='arrowright' size={32} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between'
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
    color: 'mediumslateblue'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  rocketIcon: {
    marginRight: 20,
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
    fontSize: 30,
    color: 'darkslategrey'
  },
  cardContainer: {
    justifyContent: 'center',
    height: '60%',

    width: '80%',

    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  cardIcon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',

    flex: 1,
    padding: 20
  },
  cardIconTxt: {
    fontSize: 30,
    padding: 20,

    color: 'darkslategrey'
  },
  payBtn: {
    backgroundColor: 'mediumslateblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    alignSelf: 'center',
    width: '50%',

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
    color: 'white'
  },
  payContainer: {
    flex: 3,
    padding: 20,
    justifyContent: 'center'
  },
  tapContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center'
  }
});
