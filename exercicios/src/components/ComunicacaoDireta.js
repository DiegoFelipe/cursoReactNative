import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style : {fontSize: 40} }

const filhosComProps = props => React.children.map(c => React.cloneElement(c, {...props, c.props}))

export const Filho = props =>
    <>
     <Text {...fonte}>Filho: {props.nome} {props.sobrenome} </Text>
    </>

export const Pai = props =>
    <>

    </>
