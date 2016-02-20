import React,{
	StyleSheet,
	View,
  Text,
	Dimensions,
	PropTypes,
  StatusBar
} from 'react-native'

let deviceWidth = Dimensions.get('window').width

class Test extends React.Component {
  constructor (props) {
	  super(props)
  }

  render() {
  	return (
  	  <View style={styles.container}>
        <Text style={styles.test}>
          该模块施工中
        </Text>
  	  </View>
  	)
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default Test