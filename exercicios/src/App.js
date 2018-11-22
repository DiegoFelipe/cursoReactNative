import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexivel" />
        <ParImpar numero={32} />
      <Inverter texto='React Native'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 40
  }
})
