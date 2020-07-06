import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import { AsyncStorage } from 'react-native'
import { PUSH_ENDPOINT } from '../config'
import axios from 'axios'

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken')
    if(previousToken) {
        return
    }

    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted') {
        return
    }

    let token = await Notifications.getExpoPushTokenAsync()
    await axios.post(PUSH_ENDPOINT, { token: { token } })
    AsyncStorage.setItem('pushtoken', token)
}