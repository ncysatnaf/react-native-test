import merge from 'loadsh/object/merge'
import union from 'lodash/array/union'
import * as types from '../actions'
import { combineReducers } from 'redux'



function entities(state = { goodslists: {}, items: {}, searchlist: {}, searchitem:{} }, action) {
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
	onEndReached: null,
	queryName: null
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
				onEndReached: false,
				quertyName: null
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

function searchlist(state = {
	isFetching: false,
	items: [],
	serie: [],
	nextPage: 0,
	currentPage: 0,
	onEndReached: null,
	queryName: null
}, action) {
	//console.log(state,action,types)
	switch (action.type) {
		case types.RECEIVE_SEARCH:
			if (action.searchitem) {
				return Object.assign({}, state, {
				isFetching: false,
				items: [...state.items, action.searchlist.items],
				currentPage: action.searchlist.currentPage,
				nextPage: ++action.searchlist.currentPage,
				onEndReached: false,
				quertyName: null
			})
			}
		case types.HANDLE_OPTION_CHANGE:
			if(action.parent === 'searchlist') {
				return Object.assign({}, state, action.data)
			}
		case types.REQUEST_SEARCH:
			return Object.assign({}, state, {
				isFetching: true,
			})

		default:
		 	return state
	}
}

const rootReducer = combineReducers({
	entities,
	goodslist,
	searchlist
})
export default rootReducer

