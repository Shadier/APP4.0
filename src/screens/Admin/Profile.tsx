import React, { Component } from 'react'
import { View, Button, Text } from 'native-base'
import { STYLES } from '../../style'
import { AsyncStorage } from 'react-native'

interface ProfileProps {
    navigation : any
}
interface ProfileState {
    loggedIn : boolean
}
export default class Profile extends Component<ProfileProps, ProfileState> {
    constructor(props : ProfileProps){
        super(props)
        AsyncStorage.getItem('userToken').then((token) => {
            this.setState({loggedIn: token? true : false})
        })
    }
    signOut = () => {
        AsyncStorage.removeItem('userToken')
        const { navigate } = this.props.navigation
        navigate('Loading')
    }
    render() {
        return (
            <View style={{padding: 20}}>
                <Text style={{textAlign: 'center', marginBottom: 16}}>This is my own profile</Text>
                <Button style={STYLES.button} onPress={this.signOut}>
                    <Text style={STYLES.textButton}>SIGN OUT</Text>
                </Button>
            </View>
        )
    }
}
