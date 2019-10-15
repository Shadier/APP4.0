import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { STYLES } from '../style/index';

interface TextMessageProps {
    text: string
}

export default class EmptyListMessageComponent extends Component<TextMessageProps, TextMessageProps> {

    render() {
        return (
            <View>
                <Text style={STYLES.emptyListMessage}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

