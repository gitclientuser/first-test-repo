import React, { Component } from 'react'
import { WebView } from 'react-native'

import { SlidableModalWrapper } from 'app/Components'

import styles from './WebviewScreenStyles'

export class WebviewScreen extends Component {
  render () {
    const { title, url } = this.props

    return (
      <SlidableModalWrapper title={title}>
        <WebView
          style={styles.webview}
          source={{ uri: url }}
        />
      </SlidableModalWrapper>
    )
  }
}
