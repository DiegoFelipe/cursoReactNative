import React from 'react'
import { ScrollView, View, Flatlist, Text } from 'react-native'

const alunos = [
	{id: 1, nome: 'diego', nota: 10},
	{id: 2, nome: 'felipe', nota: 9},
	{id: 3, nome: 'souza', nota: 7},
	{id: 4, nome: 'fonseca', nota: 5},
	{id: 5, nome: 'evely', nota: 1},
	{id: 6, nome: 'patrícia', nota: 4},
]

const itemStilo = {
	paddingHorizontal: 15,
	heigth: 50,
	backgroundColor: '#DDD',
	borderWidth: 0.5,
	borderColor: '#222'
}

export const Aluno = props =>
	<View style={itemStilo}>
			<Text>Nome: {props.nome}</Text>
			<Text style={fontWeigth: 'bold'}>Nota: {props.nota}</Text>
	</View>

	export default props => {
		const renderItems = ({ item }) => {
			return <Aluno {...item} />
		}

		return (
			<ScrollView>
				<Flatlist data={alunos} renderItem={renderItems} keyExtractor={(_, index) => index.toString()}
			</ScrollView>
		)
	}
