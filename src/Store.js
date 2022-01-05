import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { themeMiddleware } from './slices/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themeMiddleware)
})