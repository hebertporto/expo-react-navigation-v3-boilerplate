import {
  createStackNavigator
} from 'react-navigation'

import { HomeScreen } from '../screens/HomeScreen'
import { LinkScreen } from '../screens/LinkScreen'

const MainStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Link: LinkScreen
  }
)

export { MainStackNavigator }