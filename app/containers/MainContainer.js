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
import DrawerView from '../components/DrawerView'
import Toolbar from '../components/Toolbar'

const DRAWER_REF = 'drawer'

let toolbarActions = [
  {title: 'Search', icon: require('../../assets/search.png'), show: 'always'}
]

class MainContainer extends React.Component {
	constructor (props) {
		super(props)

		this._renderNavigationView = this._renderNavigationView.bind(this)
		this.renderContent = this.renderContent.bind(this)
	}

	_renderNavigationView() {
		return (
			<DrawerView />
		)
	}
	renderContent() {
		return(
		 	<Main />
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
  	    	  <Toolbar />
			  {this.renderContent}
			 </DrawerLayoutAndroid>
		)
	}
}

let styles = StyleSheet.create({
  toolbar: {
    height: 55,
    color: '#fff',
    backgroundColor: '#34495e',
    justifyContent: 'center'
  }
})
export default MainContainer