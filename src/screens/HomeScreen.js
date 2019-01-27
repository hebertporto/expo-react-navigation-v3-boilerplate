
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerMenuButton } from '../components/DrawerMenuButton'

class HomeScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Home Screen',
      headerLeft: <DrawerMenuButton />,
      headerTintColor: 'black'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button title="Go Link Screen" onPress={() => this.props.navigation.navigate('Link')} />
      </View>
    );
  }
}

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

export { HomeScreen }
