import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import NavigationActions from 'app/Navigation/NavigationActions'

import Component from './ConfirmationCodeScreen'

const mapDispatchToProps = {
}

export const ConfirmationCodeScreen = connect()(Component)
