import { normalize, Schema, arrayOf } from 'normalize'

let goods = new Schema('goods')
let price = new Schema('users')

goods.define({
	price: price
})

export const goodsSchema = goods
