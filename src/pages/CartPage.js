import React, { useState } from 'react';
import { Box, Typography, Fab, AppBar, Toolbar, Button, Tooltip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import GroceryList from '../components/GroceryList';
import { removeAll } from '../slices/cartSlice'
import { addOrder } from '../slices/orderHistorySlice'
import data from '../data/data'


// The dialog that asks the user to confirm whether they want to clear their cart
const ClearCartDialog = (props) => {
    const dispatch = useDispatch();

    // On clear cart, call the event which clears all items from the cart and closes the dialog using the parent component's state
    const clearCart = () => {
        dispatch(removeAll());
        props.onClose();
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>
                Clear Cart
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to clear all items from the cart?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} autoFocus>Cancel</Button>
                <Button color="error" onClick={clearCart}>
                    Clear
                </Button>
            </DialogActions>
        </Dialog>
    );
}

// The cart page component
const CartPage = () => {
    const [clearDialogOpen, setClearDialogOpen] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Holds the items in cart and the amounts of each item
    const cartItemKeys = useSelector((state) => state.cart.items)

    const dispatch = useDispatch();

    // Holds all items in cart with key being index and value being every attribute of the item (from data)
    const itemsInCart = []

    for (const key in cartItemKeys) {
        itemsInCart[key] = data[key];
    }

    // Place an order; remove all items from the cart and add the order to order history
    const placeOrder = () => {
        dispatch(addOrder(cartItemKeys));
        dispatch(removeAll());
        setOrderPlaced(true);
    }

    // Holds the price of all items in the cart, then rounds to two decimal places (forcefully)
    let price = 0;

    for (const key in itemsInCart) {
        price += itemsInCart[key].price * cartItemKeys[key];
    }

    price = price.toFixed(2);

    return (
        <React.Fragment>
            {/* The notification that lets the user know that their order has been placed */}
            <Snackbar open={orderPlaced} autoHideDuration={6000} onClose={() => setOrderPlaced(false)}>
                <Alert onClose={() => setOrderPlaced(false)} severity="success" sx={{ width: '100%' }}>
                    Your order has been placed!
                </Alert>
            </Snackbar>

            <Typography sx={{ marginTop: 2 }} variant="h5">My Cart</Typography>

            {/* If there are items in the cart, display them. Otherwise, let the user know there are no items in the cart */}
            {Object.keys(itemsInCart).length > 0
                ? (
                    <React.Fragment>
                        <GroceryList sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 8 }} groceries={itemsInCart} />
                        <Tooltip title="Clear Cart" placement="top">
                            <Fab onClick={() => setClearDialogOpen(true)} color="secondary" sx={{ position: 'fixed', bottom: { sm: 96, xs: 80 }, right: 32 }}>
                                <RemoveShoppingCartOutlinedIcon />
                            </Fab>
                        </Tooltip>
                    </React.Fragment>
                )
                : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">Your cart seems to be empty.</Typography>
            }

            {/* The dialog that asks the user whether they want to clear their cart */}
            <ClearCartDialog open={clearDialogOpen} onClose={() => setClearDialogOpen(false)} />

            {/* The bottom app bar that displays the price and the Place Order button */}
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h6">Total: ₹{price}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {Object.keys(itemsInCart).length > 0
                        ? <Button onClick={placeOrder} color="success" variant="contained">Place Order</Button>
                        : null
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default CartPage;
