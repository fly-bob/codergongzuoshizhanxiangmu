import { GET_CART_INFO } from './mutations_types'
export default {
    //传入购物车的信息进action
    cartInfo(context, product) {
        return new Promise((resolve) => {
            context.commit(GET_CART_INFO, product)
            resolve()
        })

    }
}