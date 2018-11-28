import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Inverter = props => {
	const inv = props.texto.split('').reverse().join('')
	return <Text style={Padrao.ex}>{inv}</Text>
}

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min
}

export const MegaSena = props => {
	const [min, max] = [1, 60]
	const numero = Array(props.numeros || 6).fill(0).map((num) => generateRandomNumber(min, max))

	return <Text style={Padrao.ex}>{numero.join(', ')}</Text>
}
