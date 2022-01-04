import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, Chip } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from "react-router-dom";
import data from '../data/data';
import orders from '../data/dummyOrders'

const OrderHistoryPage = () => {
    return (
        <Box sx={{ marginTop: 2 }}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3 }}>
                <Masonry gutter="20px">
                    {Array.from(Object.keys(orders)).map((key, index) => (
                        <Card key={index}>
                            <CardActionArea sx={{ display: 'flex' }} component={Link} to={`/order/${key}`}>
                                <Box sx={{ flex: '2 1 0', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            {orders[key].date}
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            {orders[key].items} item(s)
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label={orders[key].status} size="small" />
                                    </CardContent>
                                </Box>

                                <Box sx={{ flex: '1 1 0', display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                                    <Typography color="text.secondary" sx={{ fontSize: { xs: 12, sm: 17 } }} component="div">
                                        ₹{orders[key].price}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    );
}

export default OrderHistoryPage;
