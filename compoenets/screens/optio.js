import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { getBlogs, deleteBlog } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from '@expo/vector-icons/FontAwesome';

class Blogs extends Component {
  // state = {
  //   isLoading: true
  // };
  componentDidMount() {
    this.props.getBlogs();
    // this.setState({ isLoading: false });
  }
  render() {
    // console.log(this.props.loadingReducer);
    // if (this.state.isLoading) {
    //   return <ActivityIndicator size='large' />;
    // }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
        }}
      >
        {this.props.loadingReducer ? (
          <ActivityIndicator size='large' color='red' />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            data={this.props.listofBlogs}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    elevation: 8,
                    borderRadius: 15,
                    backgroundColor: '#575fcf',
                    padding: 20,
                    marginBottom: 15
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      color: '#fff',
                      // lineHeight: 15,
                      fontWeight: 'bold',
                      marginBottom: 10
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white'
                    }}
                  >
                    {item.content}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 25
                    }}
                  >
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Edit', { ...item })
                      }
                      style={{ marginRight: 15 }}
                    >
                      <View>
                        <Icon size={30} color='yellow' name='edit' />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.props.deleteBlog(item.key)}
                    >
                      <View>
                        <Icon size={30} color='red' name='close' />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

function mapSateToprops(state) {
  const listofBlogs = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key
    };
  });
  return {
    listofBlogs,
    loadingReducer: state.loadingReducer.loadingReducer
  };
}

export default connect(
  mapSateToprops,
  { getBlogs, deleteBlog }
)(Blogs);
