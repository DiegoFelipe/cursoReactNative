import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>

	<Text style={{ fontSize: 40, paddingTop: 50 }}>
	 {props.label}
	 {props.ano + 2000}
	 </Text>

ValidarProps.defaultProps = { label: 'Year'}
ValidarProps.propTypes = { ano: PropTypes.number.isRequired }

export default ValidarProps
