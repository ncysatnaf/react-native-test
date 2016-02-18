import React, {
	View,
	Component,
} from 'react-native'

import {connect} from 'react-redux/native'

import Search from '../components/Search'

class SearchContainer extends Component {
	render() {
		return (
			<Search />
		)
	}
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(SearchContainer)