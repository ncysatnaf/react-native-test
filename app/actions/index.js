import { normalize } from 'normalizr'
import { goodslistSchema } from '../constants/Schemas'

export const REQUEST_GOODS = 'REQUEST_GOODS'
export const RECEIVE_GOODS = 'REVEIVE_GOODS'

export function fetchGoodsIfNeeded(data) {
  return (dispatch, getState) => {
  	 dispatch(fetchGoods(data))
  }
}

function fetchGoods(data) {
	const nextPage = data.page
	console.log(nextPage)
  return dispatch => {
	  return fetch('http://www.030mall.com/List/ajaxSearch',{
	  	method: 'POST',
	  	headers: {
	  		'Accept': 'application/json',
      		'Content-Type': 'application/json'
	  	},
	  	body: JSON.stringify(data)
	  })
	  	.then(response => response.json())
	  	.then(json => {
	  		const normalized = normalize(json,goodslistSchema)
	  		dispatch(receiveGoods(json, normalized.entities, nextPage ))
	  	})
	  	.catch(error => console.log(error))
  } 
}
 
function receiveGoods(goods, entities,nextPage) {
	//console.log({goods, entities})
	return {
	  type: RECEIVE_GOODS,
	  entities,
	  nextPage: nextPage,
	  goods,
	}
}

function requestGoods() {
	return {
		type: REQUEST_GOODS,
	}
}