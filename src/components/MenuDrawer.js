import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';
import { withNavigation } from 'react-navigation'

import { styles } from './styles/MenuDrawer.style'

const MenuContainer = ({ navigation }) => {
	return (
		<View style={styles.root}>
			<View style={styles.headerWrapper}>
				<Text style={{ color: 'white' }}>Header</Text>
			</View>
			<View style={styles.contentWrapper}>
				<Text>Menu 1</Text>
				<Text>Menu 2</Text>
        <Button title="Go Link" onPress={() => navigation.navigate('Link')} />
				<Text>Menu 3</Text>
			</View>
		</View>
		)
}

const MenuDrawer = withNavigation(MenuContainer)

export { MenuDrawer }
