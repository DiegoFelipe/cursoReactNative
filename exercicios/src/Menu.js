import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'

export default createDrawerNavigator({

	MegaSena: {
		screen: () => <MegaSena numeros={8} />,
		navigationOptions: { title: 'Mega Sena'}
	},
	ParImpar: {
		screen: () => <ParImpar numero={30} />,
		navigationOptions: {title: 'Impar par'}
	}

}, { drawerWidth : 300 })
