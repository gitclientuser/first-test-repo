import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Field, reduxForm } from 'redux-form'

import NavigationActions from 'app/Navigation/NavigationActions'
import { Input, Button } from 'app/Components'
import { Images } from 'app/Themes'

import styles from './LaunchScreenStyles'

class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    NavigationActions.setNavigator(props.navigator)
  }

  render () {
    const { isLoading, invalid, login } = this.props

    return (
      <View style={styles.container}>
        <FastImage
          style={styles.logo}
          source={Images.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.name}
          source={Images.logoName}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={styles.formContainer}>
          <Text style={styles.header}>Sign in to GitHub</Text>
          <View style={styles.inputsContainer}>
            <Field
              name='email'
              component={Input}
              label='Username or email'
            />
            <Field
              secureTextEntry
              name='password'
              component={Input}
              label='Password'
            />
            <Button
              onPress={login}
              label='Sign In'
              disabled={invalid}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {}
  if (!email){
    errors.email = 'Email is required'
  }

  if (!password){
    errors.password = 'Password is required'
  }

  return errors
}

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: true,
  validate,
  initialValues: { email: 'gitclientuser', password: 'gitclientuserpassword' }
})(LaunchScreen)
