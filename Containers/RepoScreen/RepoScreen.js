import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import moment from 'moment'

import { routeNames } from 'app/Navigation/RouteConst'
import { Button } from 'app/Components'

import styles from './RepoScreenStyles'

const keyExtractorBranches = ({ name }) => name
const keyExtractorPrs = ({ sha }) => sha

export default class RepoScreen extends Component {
  state = {
    activeTab: 0,
  }

  componentDidMount() {
    const { getRepoPullRequests, getRepoBranches } = this.props
    getRepoBranches()
    getRepoPullRequests()
  }

  onPrsPress = () => this.setState({ activeTab: 1 })

  onBranchesPress = () => this.setState({ activeTab: 0 })

  goBack = () => this.props.navigator.pop()

  onBranchPress = ({ commit: { sha } }) => () => {
    const { setRepoData, push } = this.props
    setRepoData({ branchSha: sha })
    push(routeNames.BranchScreen)
  }

  renderBranchItem = ({ item }) =>
    <TouchableOpacity style={styles.itemWrapper} onPress={this.onBranchPress(item)}>
      <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
    </TouchableOpacity>

  renderBranchesView = () => {
    const { isBranchesLoading, branches } = this.props
    const branchesLength = branches.length

    return (
      <View style={[styles.contentContainer, styles.branches]}>
        <Text style={styles.header}>List of available branches</Text>
        <View style={[styles.contentWrapper, !branchesLength && styles.center]}>
          {isBranchesLoading
            ? <View style={styles.indicatorWrapper}>
                <ActivityIndicator color='black' />
              </View>
            : branchesLength
              ? <FlatList
                data={branches}
                keyExtractor={keyExtractorBranches}
                renderItem={this.renderBranchItem}
              />
              : <View style={styles.indicatorWrapper}>
                  <Text>No branches found</Text>
                </View>
          }
        </View>
      </View>
    )
  }

  renderPullRequestItem = ({ item }) =>
    <TouchableOpacity style={[styles.itemWrapper, styles.column]} onPress={this.onBranchPress(item)}>
      <View style={[styles.row, styles.space]}>
        <Text numberOfLines={1} style={styles.name}>{item.title}</Text>
        <Text numberOfLines={1} style={[styles.name, item.state === 'open' ? styles.green : styles.red]}>{item.state}</Text>
      </View>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.text}>Opened by </Text>
        <Text numberOfLines={1} style={styles.name}>{item.author} </Text>
        <Text numberOfLines={1} style={styles.text}>about {moment(item.date).from(moment())}</Text>
      </View>
    </TouchableOpacity>

  renderPullRequestsView = () => {
    const { isPullRequestsLoading, pullRequests } = this.props
    const pullRequestsLength = pullRequests.length

    return (
      <View style={[styles.contentContainer, styles.branches]}>
        <Text style={styles.header}>List of pull requests</Text>
        <View style={[styles.contentWrapper, !pullRequestsLength && styles.center]}>
          {isPullRequestsLoading
            ? <View style={styles.indicatorWrapper}>
                <ActivityIndicator color='black' />
              </View>
            : pullRequestsLength
              ? <FlatList
                data={pullRequests}
                keyExtractor={keyExtractorPrs}
                renderItem={this.renderPullRequestItem}
              />
              : <View style={styles.indicatorWrapper}>
                  <Text>No PRs found</Text>
                </View>
          }
        </View>
      </View>
    )
  }

  render () {
    const { repository: { name, owner } } = this.props
    const { activeTab } = this.state

    return (
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon name='arrow-with-circle-left' size={40} />
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={1}>
            {owner}/{name}
          </Text>
        </View>
        <View style={styles.row}>
          <Button
            small
            active={activeTab === 0}
            onPress={this.onBranchesPress}
            label='Branches'
          />
          <Button
            small
            active={activeTab === 1}
            onPress={this.onPrsPress}
            label='Pull Requests'
          />
        </View>
        {activeTab === 0
          ? this.renderBranchesView()
          : this.renderPullRequestsView()
        }
      </View>
    )
  }
}
