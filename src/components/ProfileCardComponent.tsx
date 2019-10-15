import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Card, CardItem, Text, Thumbnail, View } from 'native-base'
import ActionSheet from 'react-native-action-sheet'
import { COLORS } from '../style/index'
import menuOption from '../constants/actionSheet-constants'
import { Function } from '@babel/types'

interface ProfileCardProps {
  id: string
  first_name: string
  last_name: string
  profile_picture: string
  number: number
  type: string
  role: string //'Admin''Teacher''Sponsor''Sponsee'
  last_signed: string
  onClick : any
}

export default class ProfileCardComponent extends Component<ProfileCardProps, ProfileCardProps> {
  BUTTONS = ['']
  DESTRUCTIVE_INDEX = 0
  CANCEL_INDEX = 0
  profile_ID = 'ef488930-eae7-11e9-81b4-2a2ae2dbcce4' // this var is my profile_id (by localStorage) for delete option validation

  componentDidMount () {
    this.changeOptions()
  }

  changeOptions = () => {
    switch (this.props.role) {
      case 'Admin':
        if (this.props.id == this.profile_ID) {
          this.BUTTONS = menuOption.admin_validation
          this.DESTRUCTIVE_INDEX = 2
          this.CANCEL_INDEX = 1
        }
        else {
          this.BUTTONS = menuOption.admin
          this.DESTRUCTIVE_INDEX = 0
          this.CANCEL_INDEX = 2
        }
        return
      case 'Teacher':
        this.BUTTONS = menuOption.teacher
        this.DESTRUCTIVE_INDEX = 0
        this.CANCEL_INDEX = 4
        return
      case 'Sponsor':
        this.BUTTONS = menuOption.sponsor
        this.DESTRUCTIVE_INDEX = 0
        this.CANCEL_INDEX = 3
        return
      case 'Sponsee':
        this.BUTTONS = menuOption.sponsee
        this.DESTRUCTIVE_INDEX = 0
        this.CANCEL_INDEX = 5
        return
    }
  }

  render() {
    const profile = this.props
    return (
      <TouchableOpacity onPress={this.props.onClick}>
      <Card >
        <CardItem >
          <View style={styles.container}>
            <Thumbnail source={{ uri: profile.profile_picture }} />
          </View>
          <View >
            <Text style={styles.name}>
              {profile.first_name} {profile.last_name}
            </Text>
            <View style={styles.typeContainer}>
              <Text style={styles.countNumber} note>
                {profile.number}
              </Text>
              <Text style={styles.lowerCase} note>
                {profile.type}
              </Text>
            </View>
            <Text style={styles.capitalCase} note>
              {profile.last_signed}
            </Text>
          </View>
          <View style={styles.dotsContainer}>
            <Icon 
              name='dots-three-horizontal' 
              size={35}
              onPress={() =>
                ActionSheet.showActionSheetWithOptions(
                  {
                    options: this.BUTTONS,
                    cancelButtonIndex: this.CANCEL_INDEX,
                    destructiveButtonIndex: this.DESTRUCTIVE_INDEX,
                    tintColor: 'blue'
                  },
                  (buttonIndex) => {
                    console.log('button clicked :', buttonIndex)
                  }
                )
              }
            />
          </View>
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20
  },
  name: {
    paddingTop: 5,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  countNumber: {
    marginRight: 5,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  dotsContainer: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  lowerCase: {
    textTransform: 'lowercase'
  },
  capitalCase: {
    textTransform: 'capitalize',
    fontSize: 13
  }
})

