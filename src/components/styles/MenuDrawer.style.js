import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	headerWrapper:{
		flex: 0.1,
		backgroundColor: 'black',
	},
	contentWrapper: {
		flex: 0.9,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	}
})

export { styles }
