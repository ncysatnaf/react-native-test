import React, {
	View,
	StyleSheet,
	Component,
	DrawerLayoutAndroid,
	Dimensions,
	ToolbarAndroid
} from 'react-native'

import {connect} from 'react-redux/native'
import { fetchGoodsIfNeeded } from '../actions/index'

import Goods from '../components/Goods'
import Main from '../components/Main'
import DrawerView from '../components/DrawerView'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const DRAWER_REF = 'drawer'

let toolbarActions = [
  {title: 'Search', icon: require('../../assets/search.png'), show: 'always'}
]
function loadData(props){
	const { dispatch, nextPage } = props
		dispatch(fetchGoodsIfNeeded({
			page: nextPage
		}))
}

class MainContainer extends React.Component {
	constructor (props) {
		super(props)
		this._renderNavigationView = this._renderNavigationView.bind(this)
	}
	componentWillMount(){
		loadData(this.props)
	}

	_renderNavigationView() {
		return (
			<DrawerView />
		)
	}
	// renderContent() {
	// 	return(
	// 	 	<Main items={this.props.items}/>
	// 	)
	// }
	render() {
		const {items} = this.props
		return (
			<DrawerLayoutAndroid 
			  ref={DRAWER_REF}
			  drawerWidth={Dimensions.get('window').width - 60}
			  renderNavigationView={this._renderNavigationView}
			  drawerPosition={DrawerLayoutAndroid.positions.Left}>
			  <ToolbarAndroid
  	      		style={styles.toolbar}
  	      		title={'Test'}
          		titleColor='#fff'
          		actions={toolbarActions}
          		navIcon={require('../../assets/menu.png')}
          		onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
  	    	  />
  	    	  <ScrollableTabView>
  	    	  	<Goods style={styles.tabview} items={items} tabLabel='发现' scrollFunc={loadData(this.props)}/>
  	    	  	<Goods items={items} tabLabel='个性推荐' />
  	    	  	<Goods items={items} tabLabel='新品上新' />
  	    	  	<Goods items={items} tabLabel='排行榜' />
  	    	  </ScrollableTabView>
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
  },
})



function mapStateToProps(state) {
	//console.log(state)
	const {
		entities: {goods},
		goodslist: {items,nextPage}

	} = state
	//console.log(items)
	return {
		goods,
		items,
		nextPage
	}
}
export default connect(mapStateToProps)(MainContainer)