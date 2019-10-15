import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login/Login'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import Profile from '../screens/Admin/Profile'
import OthersProfile from '../screens/Shared/Profile'
import Notifications from '../screens/Admin/Notifications'
import Icon from 'react-native-vector-icons/Foundation';
import IconFA from 'react-native-vector-icons/FontAwesome';
import TeachersList from '../screens/Teacher/List'
import SponsorsList from '../screens/Sponsor/List'
import SponseesList from '../screens/Sponsee/List'
import AdminsList from '../screens/Admin/List'

    
            const listsTabs = createMaterialTopTabNavigator(
                {
                    TeachersList: {
                        screen: TeachersList, 
                        navigationOptions: {
                            title: 'Teachers',
                        }
                    },
                    SponsorsList: {
                        screen: SponsorsList, 
                        navigationOptions: {
                            title: 'Sponsors',
                        }
                    },
                    SponseesList: {
                        screen: SponseesList, 
                        navigationOptions: {
                            title: 'Sponsees',
                        }
                    },
                    AdminsList: {
                        screen: AdminsList, 
                        navigationOptions: {
                            title: 'Admins',
                        }
                    }
                },
                {
                    initialRouteName: 'TeachersList',
                    tabBarOptions: {
                        activeTintColor: '#ffffff',
                        labelStyle: {
                            paddingTop: 10,
                            textTransform: "capitalize",
                            fontSize: 14,
                        },
                        style: {
                            backgroundColor: '#6d70e0',
                        },
                        indicatorStyle: {
                            backgroundColor: '#eeeeee'
                        }
                    }
                }
            )
        const admin = createMaterialTopTabNavigator(
            {
                Home: {
                    screen : listsTabs,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                        <Icon name="home" size={28} color="#fff" />
                        )
                    },
                },
                Profile: {
                    screen : Profile,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                        <IconFA name="user" size={26} color="#fff" />
                        )
                    },
                },
                Notifications: {
                    screen : Notifications,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                        <IconFA name="bell" size={24} color="#fff" />
                        )
                    },
                },
            },
            {
                tabBarPosition: "bottom",
                swipeEnabled: true,
                initialRouteName: 'Home',
                tabBarOptions: {
                    showLabel: false,
                    showIcon: true,
                    activeTintColor: '#ffffff',
                    labelStyle: {
                        paddingTop: 10,
                        textTransform: "capitalize",
                        fontSize: 14,
                    },
                    style: {
                        backgroundColor: '#6d70e0',
                    },
                    indicatorStyle: {
                        backgroundColor: '#6d70e0'
                    }
                }
            }
        )
    const app = createStackNavigator(
        {
            Admin: {screen: admin, navigationOptions: { header: null }},
            othersProfile : {screen: OthersProfile, navigationOptions: { header: null }}
        }
    )
    const auth = createStackNavigator(
        {
            Login: Login,
        }
    )

const root = createSwitchNavigator(
    {
        Auth: auth,
        App: app,
        Loading: AuthLoadingScreen
    },
    {
        initialRouteName: 'Loading',
    }
)
const Nav = createAppContainer(root)
export default Nav