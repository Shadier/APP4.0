import React, { Component } from 'react'
import ProfileCardComponent from '../../components/ProfileCardComponent'
import SearchBarComponents from '../../components/SearchBarComponent'
import PTRView from 'react-native-pull-to-refresh'
import EmptyListMessage from '../../components/EmptyListMessageComponent'
import { Container, Content, Root,  Button, Text } from 'native-base'
import { connect } from 'react-redux'
import { admins } from '../../actions/admin-list-actions'
import { STYLES } from '../../style';
import { NavigationEvents } from "react-navigation";
import { View } from 'react-native'


interface ListProps {
  navigation : any
  admins: (arg0?: string) => void
  loading: boolean
  error: any
  list: Array<any>
}

interface ListState {
  filterActive: boolean
  admins: Array<any>
  message: any
  search: string
}

export class List extends Component<ListProps, ListState> {
  state = {
    filterActive: false,
    admins: [],
    message: Component,
    search: '',
  }

  goToOthersProfile = (name : string) => {
    const { navigate } = this.props.navigation
    navigate('othersProfile', {name: name})
  }
  
  componentWillMount = () => {
    this.props.admins()
  }

  componentWillReceiveProps = () => {
    if(typeof this.props.list !== 'undefined' && this.props.list.length > 0){
      console.log("mono")
      this.renderList()
    }
  }
  filterList = (text : string) => {
    let filter: boolean = false
    this.setState({
      search: text
    })
    text = text.replace(/ /g, "")
    if(text.length > 0)
      filter = true    
    this.props.admins(text)
    this.setState({filterActive: filter});
  }

  refreshList = () => {
    this.setState({
      filterActive: false,
      search: ''
    })
    this.props.admins();
  } 

  getSnapshotBeforeUpdate = (prevp : ListProps) => {
    if(prevp.list != this.props.list)
      this.renderList()
  }


  renderList = () => {

    this.setState({
      admins: [],
      message: <></>
    })
    console.log(this.state.filterActive)
    const msg = (this.props.list.length < 1 && this.state.filterActive)? 'No matching Administrators' : 'There are no staff personal registered'
    const msgComponent = (this.props.list.length < 1)? (<EmptyListMessage text ={msg}/>) : (<></>)
     
      
    
    console.log('llama a render y list vale: '+ JSON.stringify(this.props.list))
    let adminsList: Array<any> = this.props.list

    

    if ((typeof adminsList.length !== 'undefined')) {
       
        
      const list = adminsList.map( p => {
        return (
          <ProfileCardComponent
            id = { p.id }
            first_name = { p.first_name }
            last_name ={ p.last_name }
            number = { p.numSponsees }
            type =  'students'
            role = 'Staff'
            profile_picture = { p.profile_picture }
            last_signed = { p.last_signed }
            onClick = {() => this.goToOthersProfile(p.first_name) }
          />
        );
      });
    
      this.setState({
        admins: list,
        message: msgComponent
      })

      
    }
  }
  
  render() {
    return (
      
      <PTRView onRefresh={this.refreshList}>
        <NavigationEvents
          onWillFocus={() => {
            this.props.admins()
            this.setState({
              filterActive: false,
              message: <></>,
              search: ''
            })
          }}
        />
        <View style={{padding: 16,}}>
            <SearchBarComponents 
              setText={this.state.search}
              callback={this.filterList}
            />
            <Button style={STYLES.button}>
              <Text style={STYLES.textButton}>
                Create New
              </Text>
            </Button>
            {this.state.admins}
            {this.state.message}
        </View>
      </PTRView>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    
      loading: state.adminListReducer.aloading,
      list: state.adminListReducer.admins,
      error: state.adminListReducer.aerror,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    admins: ( search? : string ) => dispatch(admins(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
