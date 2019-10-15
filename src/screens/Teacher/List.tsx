// import React, { Component } from 'react'
// import ProfileCardComponent from '../../components/ProfileCardComponent'
// import SearchBarComponents from '../../components/SearchBarComponent'
// import PTRView from 'react-native-pull-to-refresh'
// import EmptyListMessage from '../../components/EmptyListMessageComponent'
// import { Container, Content, Root,  Button, Text } from 'native-base'
// import { connect } from 'react-redux'
// import { STYLES } from '../../style';
// import { searchTeachers, teachers } from '../../actions/teacher-list-actions'


// interface ListProps {
//   navigation : any,
//   teachers: () => void,
//   loading: boolean,
//   error: any,
//   list: Array<any>,

//   searchTeachers: (search: string) => void,
//   loadingSearch: boolean,
//   errorSearch: any,
//   listSearch: Array<any>,

// }

// interface ListState {
//   filterActive: boolean,
//   teachersList: Array<any>
// }

// export class List extends Component<ListProps, ListState> {

//   state = {
//     filterActive: false,
//     teachersList: []
//   }
  
//    componentDidMount = () => {
//     this.props.teachers()
//    }

//   filterList = (text : string) => {
//     if(text.length > 1){
//       console.log(text)
//       this.setState({
//         filterActive: true
//       });
//       this.props.searchTeachers(text)
//     }     
//     if(text.length == 0){
//       this.refreshList()
//       this.setState({
//         filterActive: false
//       });
//     }    
//   }

//   refreshList = () => {
//     console.log('refresh list')
//     this.props.teachers()
//     this.setState({
//       filterActive: false
//     });
//   } 

//   goToOthersProfile = (name : string) => {
//     const { navigate } = this.props.navigation
//     navigate('othersProfile', {name: name})
//   }

//   renderList = () => {
//     let textMessage = this.state.filterActive ?  'No matching Teachers' : 'There are no Teachers'
//     let teachersList = this.state.filterActive  ? this.props.listSearch : this.props.list

//     if (teachersList.length == 0) {
//       return (
//         <EmptyListMessage
//           text = {textMessage}
//         />
//       )
//     }
//     const list = teachersList.map( teacher => {
//       return (
//         <ProfileCardComponent
//           id = { teacher.id }
//           first_name = { teacher.first_name }
//           last_name ={ teacher.last_name }
//           number = { teacher.numSponsees }
//           type =  'sponsees'
//           role = 'teacher'
//           profile_picture = { teacher.profile_picture }
//           last_signed = { teacher.last_signed }
//           onClick = {() => this.goToOthersProfile(teacher.first_name) }
//         />
//       );
//     });
//     return list;
//   }

//   render() {
//     return (
//       <PTRView onRefresh={this.refreshList}>
//         <Root>
//           <Container>
//             <Content padder>
//             <SearchBarComponents 
//               callback={this.filterList}
//             />
//             <Button style={STYLES.button}>
//               <Text style={STYLES.textButton}>
//                 Create New
//               </Text>
//             </Button>
//             <Text>{JSON.stringify(this.props.list)}</Text>
//             {/*this.renderList()*/}
//             </Content>
//           </Container>
//         </Root>
//       </PTRView>
//     )
//   }
// }

// const mapStateToProps = (state: any) => {
//   return {
//       loading: state.teacherListReducer.tloading,
//       list: state.teacherListReducer.teachers,
//       error: state.teacherListReducer.terror,

//       loadingSearch: state.teacherSearchReducer.tloading,
//       listSearch: state.teacherSearchReducer.teachers,
//       errorSearch: state.teacherSearchReducer.terror
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     searchTeachers: ( search: string) => dispatch(searchTeachers(search)),
//     teachers: () => dispatch(teachers())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(List)
import React, { Component } from 'react'
import { View } from 'native-base'

export default class List extends Component {
  render() {
    return (
      <View>
        
      </View>
    )
  }
}
