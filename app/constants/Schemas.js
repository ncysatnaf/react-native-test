import { normalize, Schema, arrayOf} from 'normalizr'

let goodslist = new Schema('goodslists', {
	idAttribute: 'currentPage'
})
let item = new Schema('items', {
	idAttribute: 'title'
})

let searchlist = new Schema('searchlist', {
	idAttribute: 'currentPage'
})
let searchitem = new Schema('searchitem', {
	idAttribute: 'title'
})
let serie = new Schema('series')

goodslist.define({
	items: arrayOf(item)
})

searchlist.define({
	items: arrayOf(searchitem)
})

export const goodslistSchema = goodslist
export const itemSchema = item
export const searchlistSchema = searchlist
export const searchitemSchema = searchitem
export const serieSchema = serie