import React, {
	StyleSheet,
	Navigator,
	PropType,
	View,
	Text
} from 'react-native'

import MainContainer from './MainContainer'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	renderScene(route, navigator) {
		let Component = route.component
		return (
		  <Component navigator={navigator} route={route}/>
		)
	}

	render() {
		return (
			<Navigator 
			  ref='navigator'
			  style={styles.navigator}
			  configure={Navigator.SceneConfigs.FadeAndroid}
			  renderScene={this.renderScene}
			  initialRoute={{
			  	component: MainContainer,
			  	name: 'Main'
			  }}/>
    	)
	}
}

let styles = StyleSheet.create({
	navigator: {
		flex: 1
	}
})



export default App