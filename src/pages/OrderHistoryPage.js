import React, { useState } from 'react';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import OrderHistoryItem from '../components/OrderHistoryItem'
import data from '../data/data';

// Key is order ID, value is order details
const orders = {
    'fbhebf': {
        date: 'Dec 28, 2021 7:17 PM',
        items: 2,
        status: "Cancelled",
        price: 223,
    },
    'grrtjgr': {
        date: 'Dec 29, 2021 7:17 PM',
        items: 1,
        status: "Active",
        price: 111,
    },
    'rhrthht': {
        date: 'Dec 29, 2021 7:17 PM',
        items: 1,
        status: "Active",
        price: 111,
    },
    'yfefgrgh': {
        date: 'Dec 29, 2021 7:17 PM',
        items: 1,
        status: "Active",
        price: 111,
    }
}

const OrderHistoryPage = () => {
    return (
        <Box sx={{ marginTop: 2 }}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3 }}>
                <Masonry gutter="20px">
                    {Array.from(Object.keys(orders)).map((key, index) => (
                        <OrderHistoryItem key={index} id={key} order={orders[key]} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    );
}

export default OrderHistoryPage;
