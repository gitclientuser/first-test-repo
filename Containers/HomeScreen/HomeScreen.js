import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { debounce } from 'lodash'

import { routeNames } from 'app/Navigation/RouteConst'
import { Input, Button } from 'app/Components'

import styles from './HomeScreenStyles'

const keyExtractor = ({ id }) => String(id)

export default class HomeScreen extends Component {
  state = {
    activeTab: 0,
  }

  onSearchAction = debounce(this.props.getSearchResults, 500, {
    'leading': true,
    'trailing': false
  })

  renderSearch = () => {
    const { searchResults, isResultsLoading } = this.props
    const resultLength = searchResults.length

    return (
      <View style={styles.searchWrapper}>
        <Input
          label=''
          style={styles.input}
          placeholder='Search keyword..'
          onChangeText={this.onSearchAction}
        />
        <View style={[styles.contentContainer, styles.fit]}>
          <Text style={styles.header}>Search result:</Text>
          <View style={styles.contentWrapper}>
            {isResultsLoading
              ? <View style={styles.indicatorWrapper}>
                <ActivityIndicator color='black' />
              </View>
              : resultLength
                ? <FlatList
                  data={searchResults}
                  keyExtractor={keyExtractor}
                  renderItem={this.renderRepoItem}
                />
                : <View style={styles.indicatorWrapper}>
                    <Text>No results</Text>
                  </View>
            }
          </View>
        </View>
      </View>
    )
  }

  componentDidMount() {
    this.props.getRepositories()
  }

  onSearchPress = () => this.setState({ activeTab: 1 })

  onDashboardPress = () => this.setState({ activeTab: 0 })

  onRepoPress = ({ login, name }) => () => {
    const { setRepoData, push } = this.props
    setRepoData({ owner: login, name })
    push(routeNames.RepoScreen)
  }

  renderRepoItem = ({ item }) =>
    <TouchableOpacity style={styles.itemWrapper} onPress={this.onRepoPress(item)}>
      <Text numberOfLines={1} style={styles.repoName}>{item.login}/{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.stars}>{String(item.stars)}</Text>
        <Icon name='star' colo='black' size={20} />
      </View>
    </TouchableOpacity>

  renderDashboard = () => {
    const { repositories, isLoading, profile } = this.props
    const reposLength = repositories.length

    return (
      <View style={styles.searchWrapper}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{profile.userName}</Text>
        <View style={[styles.contentContainer, styles.overview]}>
          <Text style={styles.header}>Overview</Text>
          <View style={[styles.contentWrapper, styles.row]}>
            <View style={styles.column}>
              <Text style={styles.defaultText}>Followers: {profile.followers}</Text>
              <Text style={styles.defaultText}>Following: {profile.following}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.column}>
              <Text style={styles.defaultText}>Repositories: {profile.reposNumber}</Text>
              <Text style={styles.defaultText}>Collabolators: {profile.collaborators}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.header}>Repositories you contribute to</Text>
          <View style={[styles.contentWrapper, !reposLength && styles.center]}>
            {isLoading
              ? <View style={styles.indicatorWrapper}>
                  <ActivityIndicator color='black' />
                </View>
              : reposLength
                ? <FlatList
                  data={repositories}
                  keyExtractor={keyExtractor}
                  renderItem={this.renderRepoItem}
                />
                : <View style={styles.indicatorWrapper}>
                    <Text>No repos found</Text>
                  </View>
            }
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { activeTab } = this.state

    return (
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <Button
            small
            active={activeTab === 0}
            onPress={this.onDashboardPress}
            label='Dashboard'
          />
          <Button
            small
            active={activeTab === 1}
            onPress={this.onSearchPress}
            label='Search GitHub'
          />
        </View>
        {activeTab === 0
          ? this.renderDashboard()
          : this.renderSearch()
        }
      </View>
    )
  }
}
