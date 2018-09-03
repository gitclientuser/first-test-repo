import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { repoActions } from 'app/Redux/Actions/RepoActions'
import RepoSelectors from 'app/Redux/Selectors/RepoSelectors'

import Component from './BranchScreen'

const mapStateToProps = createStructuredSelector({
  repository: RepoSelectors.repoDataSelector,
  commits: RepoSelectors.commitsSelector,
  tree: RepoSelectors.treeSelector,
  isCommitsLoading: RepoSelectors.isCommitsLoadingSelector,
  isTreeLoading: RepoSelectors.isTreeLoadingSelector,
})

const mapDispatchToProps = {
  getBranchCommits: repoActions.getBranchCommits,
  getBranchTree: repoActions.getBranchTree,
}

export const BranchScreen = connect(mapStateToProps, mapDispatchToProps)(Component)
