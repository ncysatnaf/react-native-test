import { normalize, Schema, arrayOf} from 'normalizr'

let goods = new Schema('goods')
let items = new Schema('items')

goods.define({
	items: items
})

export const goodsSchema = goods
export const itemsSchema = items