import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Plataforma from './components/Plataforma'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import ListaFlex from './components/ListaFlex'

export default createDrawerNavigator({

    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: { title: 'Lista Flex'}
    },
    Evento: {
      screen: () => <Evento/>
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={20} />,
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Plataforma: {
      screen: () => <Plataforma />
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 })
