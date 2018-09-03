import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Octicon from 'react-native-vector-icons/Octicons'
import moment from 'moment'
import prettyBytes from 'pretty-bytes'

import { routeNames } from 'app/Navigation/RouteConst'
import { Input, Button } from 'app/Components'

import styles from './BranchScreenStyles'

const keyExtractor = ({ sha }) => sha

const icons = {
  blob: 'file'
}

const getIconName = (type) => {
  const currentIcon = icons[type]
  return currentIcon || 'file'
}

export default class BranchScreen extends Component {
  state = {
    activeTab: 0,
  }

  componentDidMount() {
    const { getBranchCommits, getBranchTree } = this.props
    getBranchCommits()
    getBranchTree()
  }

  onCommitsPress = () => this.setState({ activeTab: 1 })

  onCodePress = () => this.setState({ activeTab: 0 })

  goBack = () => this.props.navigator.pop()

  onCommitPress = (item) => () => {

  }

  onFilePress = (item) => () => {

  }

  renderCodeItem = ({ item }) =>
    <TouchableOpacity style={styles.itemWrapper} onPress={this.onFilePress(item)}>
      <View style={styles.row}>
        <Octicon color='rgba(3,47,98,0.5)' size={24} name={getIconName(item.type)} />
        <Text numberOfLines={1} style={styles.name}>{item.path}</Text>
      </View>
      <Text numberOfLines={1} style={styles.name}>{prettyBytes(item.size)}</Text>
    </TouchableOpacity>

  renderCodeView = () => {
    const { isTreeLoading, tree } = this.props
    const treeLength = tree.length

    return (
      <View style={[styles.contentContainer, styles.branches]}>
        <Text style={styles.header}>List of branch files</Text>
        <View style={[styles.contentWrapper, !treeLength && styles.center]}>
          {isTreeLoading
            ? <View style={styles.indicatorWrapper}>
                <ActivityIndicator color='black' />
              </View>
            : treeLength
              ? <FlatList
                data={tree}
                keyExtractor={keyExtractor}
                renderItem={this.renderCodeItem}
              />
              : <View style={styles.indicatorWrapper}>
                  <Text>No files found</Text>
                </View>
          }
        </View>
      </View>
    )
  }

  renderCommitItem = ({ item }) =>
    <TouchableOpacity style={[styles.itemWrapper, styles.column]} onPress={this.onCommitPress(item)}>
      <Text numberOfLines={1} style={styles.name}>{item.message}</Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.text}>commited by </Text>
          <Text numberOfLines={1} style={styles.name}>{item.author}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}> - </Text>
        <Text numberOfLines={1} style={styles.text}>{moment(item.date).format('MMM DD, YYYY')}</Text>
      </View>
    </TouchableOpacity>

  renderCommitsView = () => {
    const { isCommitsLoading, commits } = this.props
    const commitsLength = commits.length

    return (
      <View style={[styles.contentContainer, styles.branches]}>
        <Text style={styles.header}>List of available commits</Text>
        <View style={[styles.contentWrapper, !commitsLength && styles.center]}>
          {isCommitsLoading
            ? <View style={styles.indicatorWrapper}>
                <ActivityIndicator color='black' />
              </View>
            : commitsLength
              ? <FlatList
                data={commits}
                keyExtractor={keyExtractor}
                renderItem={this.renderCommitItem}
              />
              : <View style={styles.indicatorWrapper}>
                  <Text>No commits found</Text>
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
            onPress={this.onCodePress}
            label='Code'
          />
          <Button
            small
            active={activeTab === 1}
            onPress={this.onCommitsPress}
            label='Commits'
          />
        </View>
        {activeTab === 0
          ? this.renderCodeView()
          : this.renderCommitsView()
        }
      </View>
    )
  }
}
