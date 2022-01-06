import React, { useState } from 'react';
import { Box, Typography, Fab, AppBar, Toolbar, Button, Tooltip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import GroceryList from '../components/GroceryList';
import { removeAll } from '../slices/cartSlice'
import { addOrder } from '../slices/orderHistorySlice'
import data from '../data/data'


const ClearCartDialog = (props) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(removeAll());
        props.onClose();
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
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
        </div>
    );
}


const CartPage = () => {
    const [clearDialogOpen, setClearDialogOpen] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Holds the items in cart and the amounts of each item
    const cartItemKeys = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    const itemsInCart = {}

    for (const key in cartItemKeys) {
        itemsInCart[key] = data[key];
    }

    const placeOrder = () => {
        dispatch(addOrder(cartItemKeys));
        dispatch(removeAll());
        setOrderPlaced(true);
    }

    let cost = 0;

    for (const key in itemsInCart) {
        cost += itemsInCart[key].price * cartItemKeys[key];
    }

    cost = cost.toFixed(2);

    return (
        <React.Fragment>
            <Snackbar open={orderPlaced} autoHideDuration={6000} onClose={() => setOrderPlaced(false)}>
                <Alert onClose={() => setOrderPlaced(false)} severity="success" sx={{ width: '100%' }}>
                    Your order has been placed!
                </Alert>
            </Snackbar>

            <Typography sx={{ marginTop: 2 }} variant="h5">My Cart</Typography>


            {Object.keys(cartItemKeys).length > 0
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

            <ClearCartDialog open={clearDialogOpen} onClose={() => setClearDialogOpen(false)} />

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h6">Total: ₹{cost}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {Object.keys(cartItemKeys).length > 0
                        ? <Button onClick={placeOrder} color="success" variant="contained">Place Order</Button>
                        : null
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default CartPage;
