
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LinkScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Link</Text>
        <Button title="Go Home Screen" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export { LinkScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});