import { Notifications } from 'expo'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'
import { Provider } from 'react-redux'

import registerForNotifications from './services/push_notifications'
import store from './store'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true

    registerForNotifications()
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification

      if(origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok' }]
        )
      }
    })
  }

  render() {
    const switchNavigator = createSwitchNavigator({
      mainFlow: createBottomTabNavigator({
        welcome: WelcomeScreen,
        auth: AuthScreen,
        main: createBottomTabNavigator({
          map: MapScreen,
          deck: DeckScreen,
          review: createStackNavigator({
            review: ReviewScreen,
            settings: SettingsScreen
          }, {
            navigationOptions: {
              title: 'Review Jobs',
              tabBarIcon: ({ tintColor }) => {
                  return <Icon name='favorite' size={30} color={tintColor} />
              }
            }
          })
        }, {
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }, {
        defaultNavigationOptions: {
          tabBarVisible: false
        },
        navigationOptions: {
          lazy: true
        }
      })
    });

    const MainNavigator = createAppContainer(switchNavigator)

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
