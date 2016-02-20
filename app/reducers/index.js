import merge from 'loadsh/object/merge'
import union from 'lodash/array/union'
import * as types from '../actions'
import { combineReducers } from 'redux'



function entities(state = { goodslists: {}, items: {} }, action) {
	if (action.entities) {
	  return merge({}, state, action.entities)
	}
	return state
}

function goodslist(state = {
	isFetching: false,
	items: [],
	serie: [],
	nextPage: 0,
	currentPage: 0,
	onEndReached: null
}, action) {
	//console.log(state,action,types)
	console.log(action)
	switch (action.type) {
		case types.RECEIVE_GOODS:
			return Object.assign({}, state, {
				isFetching: false,
				items: [...state.items, action.goodslist.items],
				currentPage: action.goodslist.currentPage,
				nextPage: ++action.goodslist.currentPage,
				onEndReached: false
			})
		case types.HANDLE_OPTION_CHANGE:
			if(action.parent === 'goodslist') {
				return Object.assign({}, state, action.data)
			}
		case types.REQUEST_GOODS:
			return Object.assign({}, state, {
				isFetching: true,
			})

		default:
		 	return state
	}
}

const rootReducer = combineReducers({
	entities,
	goodslist
})
export default rootReducer

