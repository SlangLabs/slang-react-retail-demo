import React from 'react';
import { Box, Typography, Fab, AppBar, Toolbar, Button } from '@mui/material'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import GroceryItem from '../components/GroceryItem';
import data from '../data/data'

const CartPage = () => {
    return (
        <React.Fragment>
            <Typography sx={{ marginTop: 2 }} variant="h5">My Cart</Typography>
            <Box sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 8 }}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2 }}>
                    <Masonry gutter="20px">
                        <GroceryItem item={data[0]} index={0}></GroceryItem>
                        <GroceryItem item={data[2]} index={2}></GroceryItem>
                        <GroceryItem item={data[4]} index={4}></GroceryItem>
                        <GroceryItem item={data[5]} index={5}></GroceryItem>
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
            <Fab color="secondary" sx={{ position: 'fixed', bottom: { sm: 96, xs: 80 }, right: 32 }}>
                <RemoveShoppingCartOutlinedIcon />
            </Fab>

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h6">Total: ₹333</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="success" variant="contained">Place Order</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default CartPage;
