import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { STYLES } from '../../style'

interface ProfileProps{
    navigation : any
}
interface ProfileState{
    name : string
}
export default class Profile extends Component<ProfileProps, ProfileState> {
    static navigationOptions = {
        title: 'Admins',
        header: null,
    }
    UNSAFE_componentWillMount () {
        const { navigation } = this.props;
        this.setState({
            name : navigation.getParam('name')
        })
    }
    goBack = () => {
        const { goBack } = this.props.navigation
        goBack()
    }
    render() {
        return (
            <View style={{padding: 20}}>
                <Text style={{marginBottom: 16}}>This is {this.state.name}'s profile</Text>
                <Button style={STYLES.button} onPress={this.goBack}>
                    <Text style={STYLES.textButton}>GO BACK</Text>
                </Button>
            </View>
        )
    }
}
