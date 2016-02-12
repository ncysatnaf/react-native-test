import React,{
	StyleSheet,
	View,
	Dimensions,
	PropTypes
} from 'react-native'

let deviceWidth = Dimensions.get('window').width




class Main extends React.Component {
  constructor (props) {
	  super(props)
    this.renderContent = this.renderContent.bind(this)
  }

  renderContent(){

  }

  render() {
  	return (
  	  <View>
  	    {this.renderContent()}
  	  </View>
  	)
  }  
}

let styles = StyleSheet.create({
  toolbar: {
    height: 50,
    color: '#fff',
    backgroundColor: 'ff6600',
    justifyContent: 'center'
  }
})
export default Main