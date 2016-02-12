import React, {
	ListView,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	TouchableHighlight
} from 'react-native'

import { NAVLIST } from '../constants/BaseConstants' 

class NavigatorList extends React.Component {
 	constructor (props) {
		super(props)
	}

 	render(){
 	  return(
 	  	<View>
 	  		{ NAVLIST.map((g,idx) => {
 	  		  return (
 	  		  	<TouchableHighlight key={idx}>
 	  		  	  <Text>{g}</Text>
 	  		  	</TouchableHighlight>
 	  		  )
 	  		})}
 	  	</View>
 	  )
 	}
 }

 export default NavigatorList