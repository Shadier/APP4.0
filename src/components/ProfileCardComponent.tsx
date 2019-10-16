import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Card, CardItem, Text, Thumbnail, View } from 'native-base'
import ActionSheet from 'react-native-action-sheet'
import { COLORS } from '../style/index'
import menuOption from '../constants/actionSheet-constants'

interface ProfileCardProps {
  listName: string
  id: string
  first_name: string
  last_name: string
  profile_picture: string
  number: number
  type: string
  role: Array<string> 
  last_signed: string
  onClick : any
}

export default class ProfileCardComponent extends Component<ProfileCardProps, ProfileCardProps> {
  rolesTxt : string = ''
  role: string = ''
  BUTTONS = ['']
  DESTRUCTIVE_INDEX = 0
  CANCEL_INDEX = 0
  profile_ID = '959cea6c-53c1-48e7-bee3-8e262f402d56' // this var is my profile_id (by localStorage)

  componentDidMount () {
    this.changeOptions()
  }

  changeOptions = () => {
    this.props.role.forEach(r => {
      r.replace(' ', '')
      if(this.role == '')
       this.role = r
      else if(r == 'Teacher' && this.role != '')
        this.role = r
      this.rolesTxt += r + ', '
    });
    switch (this.role) {
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
      case 'Student':
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
        <CardItem style={{overflow: 'hidden'}}>
          <View style={styles.container}>
            <Thumbnail source={{ uri: profile.profile_picture }} />
          </View>
          <View >
            <Text style={styles.name}>
              {profile.first_name} {profile.last_name}
            </Text>
            { 
              this.role != 'Admin' && 
            <View style={styles.typeContainer}>
              <Text style={styles.countNumber} note>
                {profile.number}
              </Text>
              <Text style={styles.lowerCase} note>
                {profile.type}
              </Text>
            </View>
            }
            <Text style={styles.capitalCase} note>
              {profile.last_signed}
            </Text>
            {
              profile.listName == 'Staff' && 
              <View style={styles.typeContainer}>
              <Text note>
                {this.rolesTxt.slice(0, -2)}
              </Text>
            </View>
            }
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
          { 
            this.props.role.indexOf('Admin') > -1 &&
            <View style={{backgroundColor: COLORS.primary, width: 4, height: '150%', position: 'absolute', right: 0}}></View>
          }         
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

