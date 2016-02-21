import React, {
	ListView,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	TouchableHighlight,
	Dimensions
} from 'react-native'


let deviceWidth = Dimensions.get('window').width

class DrawerView extends React.Component {
 	constructor (props) {
		super(props)

		this.renderHeadr = this.renderHeader.bind(this)
	}

	renderHeader() {
	}

 	render(){
 	  return(
 	  	<View style={styles.container}>
 	  	  <View style={styles.head}>

		  </View>
		  <View style={styles.list}>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  	<TouchableHighlight>
		  		<Text style={{padding:10,color:'#34495e',marginLeft: 20,marginTop: 10,}}>施工中</Text>
		  	</TouchableHighlight>
		  </View>
 	  	</View>
 	  )
 	}
 }

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	head: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#f4a221',
		width:deviceWidth - 60,
	},
	list: {
		flex: 5,
		backgroundColor: '#FFF',
		padding: 10,
	},
	userInfo: {
		flex: 1,
		height: 40,
		backgroundColor: '#f4a221',
	}

})
 export default DrawerView