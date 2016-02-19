import merge from 'loadsh/object/merge'
import * as types from '../actions'
import { combineReducers } from 'redux'



function entities(state = { goods: {} }, action) {
	if (action.entities) {
	  return merge({}, state, action.entities)
	}
	return state
}

function goodslist(state = {
	isFetching: false,
	items: [],
	serie: [],
	nextPage: 1
}, action) {
	//console.log(state,action,types)
	console.log(action)
	switch (action.type) {
		case types.RECEIVE_GOODS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.goods.items,
				nextPage: action.nextPage++
			})

		case types.REQUEST_GOODS:
			return Object.assign({}, state, {
				isFetching: true,
			})

		default:
		 	return state
	}
}

export default function goodslists(state= {}, action) {
	switch(action.type) {
		case types.RECEIVE_SONGS:
			return Object.assign({}, state, {
			  [action.goodslist]: goodslist(state[action.goodslist], action)
			})

		case types.REQUEST_GOODS:
			return Object.assign({}, state, {
			  [action.goodslist]: goodslist(state[action.goodslist], action)
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

