import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { repoActions } from 'app/Redux/Actions/RepoActions'
import RepoSelectors from 'app/Redux/Selectors/RepoSelectors'
import NavigationActions from 'app/Navigation/NavigationActions'

import Component from './RepoScreen'

const mapStateToProps = createStructuredSelector({
  repository: RepoSelectors.repoDataSelector,
  branches: RepoSelectors.branchesSelector,
  commits: RepoSelectors.commitsSelector,
  pullRequests: RepoSelectors.pullRequestsSelector,
  isBranchesLoading: RepoSelectors.isBranchesLoadingSelector,
  isCommitsLoading: RepoSelectors.isCommitsLoadingSelector,
  isPullRequestsLoading: RepoSelectors.isPullRequestsLoadingSelector,
})

const mapDispatchToProps = {
  getRepoBranches: repoActions.getRepoBranches,
  getRepoPullRequests: repoActions.getRepoPrs,
  setRepoData: repoActions.setRepoData,
  push: NavigationActions.push
}

export const RepoScreen = connect(mapStateToProps, mapDispatchToProps)(Component)
