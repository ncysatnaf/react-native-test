import React, {
	View,
	StyleSheet,
	Component,
	Dimensions,
	TouchableOpacity,
	TextInput
} from 'react-native'

import {connect} from 'react-redux/native'
import { fetchGoodsIfNeeded } from '../actions/index'
import InteractionManager from 'InteractionManager'

import Goods from '../components/Goods'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {handleOptionChange} from '../actions/index'
let deviceWidth = Dimensions.get('window').width

function loadData(props){
	const { dispatch, nextPage, queryName } = props
		dispatch(fetchGoodsIfNeeded({
			page: nextPage,
			name: queryName
		}))
}

class SearchContainer extends React.Component {
	constructor (props) {
		super(props)
		this.onBack = this.onBack.bind(this)
		this.onSubmitEditing = this.onSubmitEditing.bind(this)
	}
 	renderContent(){
 		return(
 			<Goods
 				{...this.props}/>
 		)
 	}
 	onBack() {
 		InteractionManager.clearInteractionHandle(() => {
			this.props.navigator.pop()
		})
 	}
 	 onSubmitEditing () {
    	const {dispatch} = this.props
    	loadData(this.props)
  	}
	componentWillReceiveProps(nextProps){
		//console.log(this.props,nextProps)
		const {dispatch, onEndReached, currentPage, nextPage} = nextProps
		if(nextProps.onEndReached == true && nextProps.isFetching == false) {
			loadData(this.props)
		}
	}

	render() {
		console.log(this.props)
		const {items, dispatch} = this.props
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.onBack}>
					</TouchableOpacity>

				<TextInput
				  style={styles.input}
				  onChangeText={(text) => dispatch(handleOptionChange('queryName', text, 'searchlist'))}
				  placeholder={'输入想查找的Tag'}
				  underlineColorAndroid={'#3a3f41'}
				  onSubmitEditing={this.onSubmitEditing}
				  autoFocus={true}
				  autoCorrect={false}
				  value={this.text}/>
				 </View>
				 {this.props.queryName !== null && this.renderContent()}
			</View>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    width: deviceWidth,
    height: 50,
    backgroundColor: '#f4a221'
  },
  backIcon: {
    marginLeft: 10,
    width: 40
  },
  search: {
    width: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    padding: 5,
    width: deviceWidth,
    color: '#fff'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    height: 50,
    marginTop: 15,
    lineHeight: 50,
  }
})

function mapStateToProps(state) {
	//console.log(state)
	const {
		entities: {searchitem},
		searchlist: {nextPage, onEndReached, currentPage, isFetching, queryName}

	} = state
	//console.log(items)
	const items = searchitem || ''
	return {
		onEndReached,
		isFetching,
		currentPage,
		items,
		nextPage,
		queryName
	}
}
export default connect(mapStateToProps)(SearchContainer)