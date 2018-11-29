import React from 'react'
import { Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends React.Component {

	state = {
		texto: ''
	}

	alterarTexto = texto => this.setState({ texto })

	render() {
		return (
			<>
			<Text style={{fontSize: 40, marginTop: 50}}>{this.state.texto}</Text>
			<TextInput
			style={Padrao.input}
			value={this.state.texto}
			onChangeText={this.alterarTexto} />
			</>
		)
	}
}
