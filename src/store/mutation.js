import { GET_CART_INFO } from './mutations_types'
export default {
    [GET_CART_INFO](state, product) {
        product.checked = true
        let unsavedData = state.product.find(item => { return item.iid === product.iid })
        console.log(unsavedData);
        if (unsavedData) {
            unsavedData.count += 1
        } else {
            product.count = 1
            state.product.push(product)
        }

        state.count += 1

    },

}