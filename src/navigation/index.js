import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

import { WelcomeScreen } from './../screens/WelcomeScreen'
import { DrawerNavigator } from './DrawerNavigator'

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: DrawerNavigator,
  Welcome: WelcomeScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export { AppNavigator }
