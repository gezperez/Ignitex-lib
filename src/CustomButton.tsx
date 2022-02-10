import React from 'react'
import { Button } from 'react-native'
import { noop } from 'lodash'

const CustomButton = () => <Button onPress={noop} title="TITLE" />

export default CustomButton
