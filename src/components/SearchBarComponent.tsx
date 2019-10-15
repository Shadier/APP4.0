import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Item, Input, Icon, View } from 'native-base'
import { COLORS } from '../style/index'

interface SearchBarProps {
  callback: any,
  setText: string
}
interface SearchBarState {
  borderColor: string,
  elevation: number
}

export default class SearchBarComponent extends Component<SearchBarProps, SearchBarState> {
  state = { borderColor: COLORS.lightGray, elevation: 0 }
  
  onFocus = () => { 
    this.setState({ borderColor: COLORS.primary, elevation: 5 })
  }

  onBlur = () => { 
    this.setState({ borderColor: COLORS.lightGray, elevation: 0 })
  }
  
  render() {
    return (
      <View style={[styles.container, { borderColor: this.state.borderColor, elevation: this.state.elevation }]}>
        <Item style={{borderColor: '#fff'}}>
          <Input
            onChangeText={(text) => this.props.callback(text)}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder='Search...'
            placeholderTextColor={COLORS.lightGray}
            style={styles.input}
            value={this.props.setText} />
          <Icon name='ios-search' style={[styles.icon, {color: this.state.borderColor}]}  />
        </Item>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderWidth: 2,
    borderRadius: 8,
    elevation: 0,
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 15,
    paddingVertical: 0,
    height: 32,
    color: COLORS.darkGray
  },
  icon: {
    fontSize: 18 
  }
})