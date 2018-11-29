import React from 'react'
import { Text, Button, Alert, ToastAndroid, Platform } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => {
	const notificar = msg => {
		if(Platform.OS === 'android') {
			ToastAndroid.show(msg, ToastAndroid.LONG)
		} else {
			Alert.alert('asdasd', msg)

		}
	}

	return (
		<>
		<Text>asdasdasdasd</Text>
		<Button title='Plataforma' style={Padrao.ex}
		onPress={() => notificar('Parabéns')} />
		</>
	)
}
