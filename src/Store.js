import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { themeMiddleware } from './slices/themeSlice'
import cartReducer, { cartMiddleware } from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themeMiddleware, cartMiddleware)
})