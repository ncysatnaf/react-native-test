import React, {
	View,
	StyleSheet,
	Component,
	DrawerLayoutAndroid,
	Dimensions,
	ToolbarAndroid
} from 'react-native'

import {connect} from 'react-redux/native'

import Main from '../components/Main'
import NavigatorList from '../components/NavigatorList'

const DRAWER_REF = 'drawer'

let toolbarActions = [
  {title: 'Search', icon: require('../../assets/search.png'), show: 'always'}
]

class MainContainer extends React.Component {
	constructor (props) {
		super(props)

		this._renderNavigationView = this._renderNavigationView.bind(this)
	}

	_renderNavigationView() {
		return (
			<NavigatorList />
		)
	}
	render() {
		return (
			<DrawerLayoutAndroid 
			  ref={DRAWER_REF}
			  drawerWidth={Dimensions.get('window').width - 60}
			  renderNavigationView={this._renderNavigationView}
			  drawerPosition={DrawerLayoutAndroid.positions.Left}>
			  <ToolbarAndroid
  	      		style={styles.toolbar}
  	      		title={'React Test2'}
          		titleColor='#fff'
          		actions={toolbarActions}
          		navIcon={require('../../assets/menu.png')}
          		onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
  	    	  />
			  <Main />
			 </DrawerLayoutAndroid>
		)
	}
}

let styles = StyleSheet.create({
  toolbar: {
    height: 60,
    color: '#fff',
    backgroundColor: 'ff6600',
    justifyContent: 'center'
  }
})
export default MainContainer