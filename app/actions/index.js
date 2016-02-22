import { normalize } from 'normalizr'
import { goodslistSchema, searchlistSchema } from '../constants/Schemas'

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
	const page = data.page.toString() || ''
	const queryName = data.name || ''
	const formdata = new FormData()
	formdata.append("page", page)
	formdata.append("name", queryName)
	return dispatch => {
		if (queryName == null) {
			dispatch(requestGoods())
		}else{
			dispatch(requestSearch())
		}
	  return fetch('http://www.030mall.com/List/ajaxSearch',{
	  	method: 'POST',
	  	headers: {
      		Accept: 'application/json',
	  	},
	  	body: formdata
	  })

	  	.then(response => response.json())
	  	.then(json => {
	  		console.log(json)
	  		// const nextPage = json.currentPage + 1
	  		// console.log(nextPage)
	  		if(!queryName){
	  			const normalized = normalize(json,goodslistSchema)
	  			dispatch(receiveGoods(json, normalized.entities, queryName))
	  		}else{
	  			const normalized = normalize(json,searchlistSchema)
	  			dispatch(receiveSearch(json, normalized.entities, queryName))
	  			
	  		}
	  	})
	  	.catch(error => console.log(error))
  } 
}
 
function receiveGoods(goodslist, entities, queryName) {
	//console.log({goods, entities})
	return {
	  type: RECEIVE_GOODS,
	  entities,
	  goodslist,
	  queryName
	}
}

function requestGoods() {
	return {
		type: REQUEST_GOODS,
	}
}

export const RECEIVE_SEARCH = 'REVEIVE_SEARCH'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'

function requestSearch() {
	return {
		type: REQUEST_SEARCH,

	}
}

function receiveSearch(searchlist, entities,queryName) {
	//console.log({goods, entities})
	return {
	  type: RECEIVE_SEARCH,
	  entities,
	  searchlist,
	  queryName
	}
}



export const HANDLE_OPTION_CHANGE = 'HANDLE_OPTION_CHANGE'

export function handleOptionChange(key,value,parent) {
	return {
	  type: HANDLE_OPTION_CHANGE,
	  parent: parent,
	  data: {
	  	[key]: value,
	  }
	}
}

const CHANGE_GOODS_LIST = 'CHANGE_GOODS_LIST'
export function changeGoodslist(Goodslist) {
  return {
    type: CHANGE_GOODS_LIST,
    Goodslist: Goodslist
  }
}