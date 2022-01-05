import { createSlice, isAllOf, isAnyOf } from '@reduxjs/toolkit'

// Get items from the cart that were stored in localStorage
const initalState = () => {
    const arr = localStorage.getItem('cart');
    if (arr === null) {
        return { items: {} }
    }
    return { items: JSON.parse(arr) };
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: initalState,
    reducers: {
        // If item does not exist, adds it. Otherwise, increments the amount
        addOne: (state, action) => {
            // Pass the index of the item
            const id = action.payload;

            if (state.items.hasOwnProperty(id)) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
        removeOne: (state, action) => {
            // Pass the index of the item
            const id = action.payload;

            if (state.items.hasOwnProperty(id)) {
                if (state.items[id] === 1) {
                    delete state.items[id];
                } else {
                    state.items[id]--;
                }
            }
        }
    },
})

const cartMiddleware = (store) => (next) => (action) => {
    let result = next(action);

    // If the action is part of cartSlice
    if (action.type.length >= 5 && action.type.substring(0, 4) === 'cart') {
        console.log(store.getState().cart)

        localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
    }

    return result;
};

export const { addOne, removeOne } = cartSlice.actions

export { cartMiddleware }

export default cartSlice.reducer
