import {configureStore} from '@reduxjs/toolkit'
import cardSlice from './CartSlice'

const myStore = configureStore({ 
    reducer: {     
        cart: cardSlice 
    }
})

export default myStore 