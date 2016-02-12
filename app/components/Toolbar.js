import React,{
	StyleSheet,
	View,
	Text,
	Dimensions,
	ScrollView,
	TouchableOpacity
} from 'react-native'

import { TOPICS } from '../constants/BaseConstants'
let deviceWidth = Dimensions.get('window').width

class Toolbar extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
	  return (
	  	<View style={styles.view}>
	  		<ScrollView
	  		  key={'scrollView'}
	  		  contentContainerStyle={styles.container}
	  		  showsHorizontalScrollIndicator={false}
          	  horizontal={true}
	  		  >
	  		  { TOPICS.map((g,idx) => {
	  		  	return (
	  		  	  <TouchableOpacity key={idx} style={styles.item}>
	  		  	    <Text style={styles.genre}>{g}</Text>
	  		  	  </TouchableOpacity>
	  		  	)
	  		  })}
	  		</ScrollView>
	  	</View>
	  )
	}
}

let styles = StyleSheet.create({
  view: {
  	backgroundColor: '#fff'
  }, 
  container: {
    height: 40,
    width: deviceWidth,
  },
  item: {
  	color: '#34465d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  genre: {
    fontSize: 12,
  }
})
export default Toolbar