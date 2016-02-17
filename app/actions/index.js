import { normalize } from 'normalizr'
import { goodsSchema} from '../constants/Schemas'

export const REQUEST_GOODS = 'REQUEST_GOODS'
export const RECEIVE_GOODS = 'REVEIVE_GOODS'

export function fetchGoodsIfNeeded() {
  return (dispatch, getState) => {
  	 dispatch(fetchGoods())
  }
}

function fetchGoods() {
  return dispatch => {
	  return fetch('http://www.030mall.com/List/ajaxSearch')
	  	.then(response => response.json())
	  	.then(json => {
	  		const normalized = normalize(json,goodsSchema)
	  		dispatch(receiveGoods(json, normalized.entities ))
	  	})
	  	.catch(error => console.log(error))
  } 
}
 
function receiveGoods(goods, entities) {
	//console.log({goods, entities})
	return {
	  type: RECEIVE_GOODS,
	  entities,
	  nextUrl: null,
	  goods,
	}
}

function requestGoods() {
	return {
		type: REQUEST_GOODS,
	}
}