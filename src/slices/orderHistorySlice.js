import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initalState = () => {
    const arr = localStorage.getItem('orderHistory');
    if (arr === null) {
        return { orders: {} };
    }
    return { orders: JSON.parse(arr) };
}


export const orderHistorySlice = createSlice({
    name: 'orderHistory',
    /* Structure: 
    {
        orders: {
            id: {
                date: date,
                cancelled: false,
                items: {
                    key: quantity,
                }
            }
            id: ...
        }
    }
    */
    initialState: initalState,
    reducers: {
        addOrder: (state, action) => {
            // Receives an object. Key is item ID, value is quantity of the item.
            const items = action.payload;
            const uuid = uuidv4();
            
            state.orders[uuid] = { date: Date.now(), items: items, cancelled: false }
        },
        cancelOrder: (state, action) => {
            // Pass the UUID of an order
            const uuid = action.payload;
            state.orders[uuid].cancelled = true;
        }
    },
})

const orderHistoryMiddleware = (store) => (next) => (action) => {
    let result = next(action);

    if (action.type.length >= 12 && action.type.substring(0, 12) === 'orderHistory') {
        console.log(store.getState().orderHistory)

        localStorage.setItem('orderHistory', JSON.stringify(store.getState().orderHistory.orders));
    }

    return result;
};

export const { addOrder, cancelOrder } = orderHistorySlice.actions

export { orderHistoryMiddleware }

export default orderHistorySlice.reducer
