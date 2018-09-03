import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Field, reduxForm } from 'redux-form'

//import { Label, CodeInput, KeyboardAvoidingView, SlidableModalWrapper } from 'app/Components'
//import { AuthSelectors, CheckConfirmationCodeActions, SendConfirmationCodeActions } from 'app/Redux/AuthRedux'
//import { Metrics, Colors } from 'app/Themes'

import styles from './ConfirmationCodeScreenStyles'

class ConfirmationCodeScreen extends Component {

  state = {
    showResendButton: true,
  }

  render () {
    const { showResendButton } = this.state
    const { handleSubmit, isLoading } = this.props

    return (
      <View>

        <View style={styles.mainContainer}>
          <View style={[styles.inputWrapper, Metrics.isAndroid && styles.androidInputWrapper]}>

            <Text style={styles.subtitle}>
              {`We've sent a code to your email\naddress. Please enter it below.`}
            </Text>

            <Field
              component={CodeInput}
              name='confirmationCode'
              handleOnFullfill={handleSubmit}
            />
          </View>

        </View>

        {isLoading &&
          <View style={styles.indicator}>
            <ActivityIndicator color={Colors.blue} />
          </View>
        }

      </View>
    )
  }
}

export default reduxForm({
  form: 'ConfirmationCodeForm',
  destroyOnUnmount: true,
})(ConfirmationCodeScreen)
