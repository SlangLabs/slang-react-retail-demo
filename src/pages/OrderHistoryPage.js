import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, Chip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from "react-router-dom";
import data from '../data/data';
import { formatDate } from '../Utils'


const OrderHistoryItem = (props) => {
    let price = 0;

    for (const itemKey in props.order.items) {
        price += data[itemKey].price * props.order.items[itemKey];
    }

    price = price.toFixed(2);

    const date = new Date(props.order.date)

    const formattedDate = formatDate(date);

    return <Card>
        <CardActionArea sx={{ display: 'flex' }} component={Link} to={`/order/${props.orderKey}`}>
            <Box sx={{ flex: '2 1 0', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                <CardContent>
                    <Typography sx={{ fontSize: { xs: 13, sm: 18 } }} component="div" variant="h5">
                        {formattedDate}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                        {Object.keys(props.order.items).length} item(s)
                    </Typography>
                    <Chip color={props.order.cancelled ? 'error' : 'success'} variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label={props.order.cancelled ? 'Cancelled' : 'Active'} size="small" />
                </CardContent>
            </Box>

            <Box sx={{ flex: '1 1 0', display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary" sx={{ fontSize: { xs: 12, sm: 17 } }} component="div">
                    ₹{price}
                </Typography>
            </Box>
        </CardActionArea>
    </Card>
}


const OrderHistoryPage = () => {
    const orders = useSelector((state) => state.orderHistory.orders)

    const dispatch = useDispatch();

    // Show the most recent orders first
    const sortedOrdersKeys = Object.keys(orders);
    sortedOrdersKeys.sort((a, b) => { return orders[b].date - orders[a].date });

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant='h5'>
                Order History
            </Typography>

            {sortedOrdersKeys.length > 0
                ? (<ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3 }}>
                    <Masonry gutter="20px">
                        {Array.from(sortedOrdersKeys).map((key, index) => (
                            <OrderHistoryItem key={index} orderKey={key} order={orders[key]} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>)
                : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">You have not made any orders.</Typography>
            }

        </Box>
    );
}

export default OrderHistoryPage;
