import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { authActions } from 'app/Redux/Actions/AuthActions'
import AuthSelectors from 'app/Redux/Selectors/AuthSelectors'

import Component from './LaunchScreen'

const mapStateToProps = createStructuredSelector({
  isLoading: AuthSelectors.isLoadingSelector,
})

const mapDispatchToProps = {
  login: authActions.login,
}

export const LaunchScreen = connect(mapStateToProps, mapDispatchToProps)(Component)
