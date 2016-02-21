import React, {
	View,
	StyleSheet,
	Component,
	DrawerLayoutAndroid,
	Dimensions,
	ToolbarAndroid,
} from 'react-native'

import {connect} from 'react-redux/native'
import { fetchGoodsIfNeeded } from '../actions/index'
import shallowEqual from 'react-pure-render/shallowEqual'

import Goods from '../components/Goods'
import Test from '../components/Test'
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
			page: nextPage,
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

	// shouldComponentUpdate(nextProps, nextState) {
 //    const shouldUpdate =
 //      !shallowEqual(this.props, nextProps) ||
 //      !shallowEqual(this.state, nextState)
 //    return shouldUpdate
 //  }

	componentWillReceiveProps(nextProps){
		//console.log(this.props,nextProps)
		const {dispatch, onEndReached, currentPage, nextPage} = nextProps
		if(nextProps.onEndReached == true) {
			loadData(nextProps)
		}
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
  	      		title={'Moe'}
          		titleColor='#fff'
          		actions={toolbarActions}
          		navIcon={require('../../assets/menu.png')}
          		onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
  	    	  />
  	    	  <ScrollableTabView>
  	    	  	<Goods {...this.props} style={styles.tabview} items={items} tabLabel='发现' />
  	    	  	<Test {...this.props} style={styles.tabview} items={items} tabLabel='个性推荐' />
  	    	  	<Test {...this.props} style={styles.tabview} items={items} tabLabel='新品上新' />
  	    	  	<Test {...this.props} style={styles.tabview} items={items} tabLabel='排行榜' />
  	    	  </ScrollableTabView>
			 </DrawerLayoutAndroid>
		)
	}
}

let styles = StyleSheet.create({
  toolbar: {
    height: 55,
    color: '#fff',
    backgroundColor: '#f4a221',
    justifyContent: 'center'
  },
})



function mapStateToProps(state) {
	console.log(state)
	const {
		entities: {items},
		goodslist: {nextPage, onEndReached, currentPage, isFetching}

	} = state
	//console.log(items)
	return {
		onEndReached,
		isFetching,
		currentPage,
		items,
		nextPage
	}
}
export default connect(mapStateToProps)(MainContainer)