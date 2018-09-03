import React, { PureComponent } from 'react'
import { Text, Animated, TouchableOpacity, Image, ActionSheetIOS } from 'react-native'
import { Images, Metrics } from 'app/Themes'

import styles from './BottomActionSheetStyles'

export default class BottomActionSheet extends PureComponent {
  opacity = new Animated.Value(0)

  componentWillMount () {
    if (Metrics.isAndroid) {
      Animated.timing(
        this.opacity,
        {
          toValue: 0.38,
          duration: 300,
        }).start()
    } else {
      const { id, removeFile } = this.props
      ActionSheetIOS.showActionSheetWithOptions({
        options: ['Cancel', 'Delete Download'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          removeFile({ id })
        }
        this.props.dismissModal(true, false)
      })
    }
  }

  onRemovePress = () => {
    const { id, removeFile } = this.props
    this.onOutPress()
    removeFile({ id })
  }

  onOutPress = () => {
    if (Metrics.isAndroid) {
      Animated.timing(
        this.opacity,
        {
          toValue: 0,
          duration: 200,
        }).start()
      setTimeout(() => this.props.dismissModal(true, false), 100)
    }
  }

  render () {
    return (
      Metrics.isIos
        ? null
        : <TouchableOpacity
          ActiveOpacity={1}
          onPressIn={this.onOutPress}
          style={styles.container}
        >
          <Animated.View style={[styles.mask, { opacity: this.opacity }]} />
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={this.onRemovePress}
            style={styles.bottomContainer}
          >
            <Image source={Images.trashIcon} style={styles.image} />
            <Text style={styles.text}>Delete download</Text>
          </TouchableOpacity>
        </TouchableOpacity>
    )
  }
}
