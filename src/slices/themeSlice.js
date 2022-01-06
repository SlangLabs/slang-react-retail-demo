import { createSlice } from '@reduxjs/toolkit'

// Load the data from localStorage
const initalState = () => {
    const themeFromLS = localStorage.getItem('theme');
    if (themeFromLS === null) return { value: 'light' };
    return { value: themeFromLS };
}


export const themeSlice = createSlice({
    name: 'theme',
    /* Structure: 
    {
        value: 'light'/'dark'
    }
    */
    initialState: initalState,
    // Change the theme
    reducers: {
        dark: state => {
            state.value = 'dark'
        },
        light: state => {
            state.value = 'light'
        },
    },
})

// Stores the data in localStorage
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
