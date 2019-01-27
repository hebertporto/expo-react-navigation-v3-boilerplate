import React from 'react'
import { Dimensions } from 'react-native';
import {
  createDrawerNavigator
} from 'react-navigation';

import { MainStackNavigator } from './MainStackNavigator'
import { MenuDrawer } from './../components/MenuDrawer'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH * 0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainStackNavigator
  },
  DrawerConfig
);

export { DrawerNavigator }
