import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions'

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        return (
            <View>
                <Button 
                    title='Reset Liked Jobs' 
                    large 
                    icon={{ name: 'delete-forever' }} 
                    backgroundColor='#F44336' 
                    buttonStyle={{ marginTop: 10 }}
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        )
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen)