import * as React from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import CustomButton from './CustomButton'

export const actions = {
  onPress: action('onPressCustomButton'),
}

storiesOf('Task', module)
  .addDecorator(story => <View style={{ flex: 1 }}>{story()}</View>)
  .add('default', () => <CustomButton {...actions} />)
