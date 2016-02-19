import { normalize, Schema, arrayOf} from 'normalizr'

let goodslist = new Schema('goodslists', {
	idAttribute: 'currentPage'
})
let item = new Schema('items', {
	idAttribute: 'title'
})

let serie = new Schema('series')

goodslist.define({
	items: arrayOf(item)
})
item.define({
	attrs: arrayOf(serie)
})

export const goodslistSchema = goodslist
export const itemSchema = item
export const serieSchema = serie