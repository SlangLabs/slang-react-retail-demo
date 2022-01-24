import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { themeMiddleware } from './slices/themeSlice'
import cartReducer, { cartMiddleware } from './slices/cartSlice'
import orderHistoryReducer, { orderHistoryMiddleware } from './slices/orderHistorySlice'
import assistantSliceReducer from './slices/assistantSlice'

// Create the Redux store and add the custom middleware
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        orderHistory: orderHistoryReducer,
        assistant: assistantSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themeMiddleware, cartMiddleware, orderHistoryMiddleware)
})