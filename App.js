import React from 'react'
import { AppLoading, Font, Icon } from 'expo'

import { AppNavigator } from './src/navigation'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font
      })
    ])
  }

  handleLoadingError = error => {
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state

    if (isReady) {
      return <AppNavigator />
    }

    return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
    )
  }
}
