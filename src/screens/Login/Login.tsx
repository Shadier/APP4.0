import React, { Component } from 'react'
import { View, Button, Text } from 'native-base'
import { COLORS, STYLES } from '../../style';
import { AsyncStorage } from 'react-native';

interface LoginProps {
    navigation: any
}
interface LoginState {

}
export default class Login extends Component<LoginProps, LoginState> {

    static navigationOptions = {
        header: null,
    }
    goToHome = () => {
        //We do this until we were registered
        AsyncStorage.setItem('userToken', '1234')
        const { navigate } = this.props.navigation;
        navigate('Loading')
    } 
    render() {
        return (
            <View style={{backgroundColor: COLORS.primary, flex: 1, padding: 20}}>
                <Button style={STYLES.button} onPress={this.goToHome}>
                    <Text style={STYLES.textButton}>LOGIN</Text>
                </Button>
            </View>
        )
    }
}
