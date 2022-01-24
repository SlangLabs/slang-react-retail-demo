import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        type: null,
        info: null,
    }
}

export const assistantSlice = createSlice({
    name: 'assistant',
    /* Structure: 
    {
        type: 'search' | 'navigation' | 'order',
        info: info
    }
    */
    initialState: initialState,
    reducers: {
        // If item does not exist, adds it. Otherwise, increments the amount
        reset: (state) => {
            // Receives the index of the item
            state.data = { action: null, info: null };
        },
        action: (state, action) => {
            state.data = { action: action.payload.action, info: action.payload.info }
        }
    },
})


export const { reset, action } = assistantSlice.actions

export default assistantSlice.reducer
