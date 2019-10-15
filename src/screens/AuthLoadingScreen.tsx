import React, { Component } from 'react'
import { AsyncStorage, View, ActivityIndicator, Text, StatusBar, StyleSheet } from 'react-native';

interface AuthProps{
    navigation: { navigate: (arg0: string) => void; }
}

export default class AuthLoadingScreen extends Component< AuthProps, {}> {
    constructor(props: AuthProps) {
      super(props);
      this.isAuthenticated();
    }
  
    isAuthenticated = async () => {
      const userToken = await AsyncStorage.getItem('userToken')
      console.log(userToken)
      this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});