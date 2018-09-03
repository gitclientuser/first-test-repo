import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import NavigationActions from 'app/Navigation/NavigationActions'
import HomeSelectors from 'app/Redux/Selectors/HomeSelectors'
import AuthSelectors from 'app/Redux/Selectors/AuthSelectors'
import { homeActions } from 'app/Redux/Actions/HomeActions'
import { repoActions } from 'app/Redux/Actions/RepoActions'

import Component from './HomeScreen'

const mapStateToProps = createStructuredSelector({
  repositories: HomeSelectors.repositoriesSelector,
  isLoading: HomeSelectors.isRepoLoadingSelector,
  searchResults: HomeSelectors.resultsSelector,
  profile: AuthSelectors.profileSelector,
  isResultsLoading: HomeSelectors.isResultsLoadingSelector,
})

const mapDispatchToProps = {
  getRepositories: homeActions.getRepos,
  getSearchResults: homeActions.search,
  setRepoData: repoActions.setRepoData,
  push: NavigationActions.push
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Component)
