import { connect } from 'react-redux'

import NavigationActions from 'app/Navigation/NavigationActions'

import Component from './BottomActionSheet'

const mapDispatchToProps = {
  removeFile: () => {},  //RemoveFileActions.Attempt,
  dismissModal: () => {}, //NavigationActions.dismissModal,
}

export const BottomActionSheet = connect(null, mapDispatchToProps)(Component)
