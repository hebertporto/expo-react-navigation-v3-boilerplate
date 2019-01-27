import React, { Component } from 'react'
import { View, Button } from 'react-native'

class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={navigation.navigate('Dashboard')} />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

export { WelcomeScreen }
