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
	// const nextPage = data.page
	// console.log(nextPage)
	const page = data.page.toString()
	const formdata = new FormData()
	formdata.append("page", page)
  return dispatch => {
  	dispatch(requestGoods())
	  return fetch('http://www.030mall.com/List/ajaxSearch',{
	  	method: 'POST',
	  	headers: {
      		Accept: 'application/json',
	  	},
	  	body: formdata
	  })
	  	.then(response => response.json())
	  	.then(json => {
	  		// const nextPage = json.currentPage + 1
	  		// console.log(nextPage)
	  		const normalized = normalize(json,goodslistSchema)
	  		dispatch(receiveGoods(json, normalized.entities))
	  	})
	  	.catch(error => console.log(error))
  } 
}
 
function receiveGoods(goodslist, entities) {
	//console.log({goods, entities})
	return {
	  type: RECEIVE_GOODS,
	  entities,
	  goodslist
	}
}

function requestGoods() {
	return {
		type: REQUEST_GOODS,
	}
}

export const HANDLE_OPTION_CHANGE = 'HANDLE_OPTION_CHANGE'

export function handleOptionChange(key,value,parent) {
	return {
	  type: HANDLE_OPTION_CHANGE,
	  parent: parent,
	  data: {
	  	[key]: value,
	  	isFetching: true
	  }
	}
}