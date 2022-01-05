import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        dark: state => {
            state.value = 'dark'
        },
        light: state => {
            state.value = 'light'
        },
    },
})

const themeMiddleware = (store) => (next) => (action) => {
    if (themeSlice.actions.dark.match(action)) {
        localStorage.setItem('theme', 'dark');
    } else if (themeSlice.actions.light.match(action)) {
        localStorage.setItem('theme', 'light');
    }
    return next(action);
};

export const { dark, light } = themeSlice.actions

export { themeMiddleware }

export default themeSlice.reducer
