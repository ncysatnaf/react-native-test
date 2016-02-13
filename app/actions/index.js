import { goodsSchema } from '../constants/Schemas'
import {arrayOf, normalize} from 'normalizr' 

/*
function getHeader() {
	return {
	  'Accept': 'application/josn',
	  'Content-Type': 'application/json'
	}
}

export const GOODS_DATA_REQUEST = 'GOODS_DATA_REQUEST'
export const GOODS_DATA_SUCCESS = 'GOODS_DATA_SUCCESS'
export const GOODS_DATA_FAILURE = 'GOODS_DATA_FALURE'

function fetchGoodDatas(formdata,nextPageUrl) {
	const {page} = formdata
  return {
  	page,
	[CALL_API]: {
	  types: [ GOODS_DATA_REQUEST, GOODS_DATA_SUCCESS, GOODS_DATA_FAILURE ],
	  endpoint: nextPageUrl,
	  schema: Schemas.GOODS,
	  request: {
		method: 'POST',
		header: getHeader(),
		body: JSON.stringify(formdata)
	  }
	}
  }
}

export function loadGoodDatas(){
  return (dispatch, getState) => {
  	const nextPageUrl = 'http://www.030mall.com/List/ajaxSearch'
  	const formdata = {
  		"page" : "1",
  		"group": "1"
  	}
  	return dispatch(fetchGoodDatas(formdata, nextPageUrl))
  }
}

*/
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