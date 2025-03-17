import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: []
    },
    reducers: {
        addCart: (state, action) => {
            const findFlower = state.cartItem.find( (el) => el.id == action.payload.id)
            if(!findFlower){
                state.cartItem.push(action.payload)
            }
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer