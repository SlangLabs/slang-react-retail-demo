import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Box, Button, ButtonGroup, Chip, AppBar, Toolbar } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import data from '../data/data';
import orders from '../data/dummyOrders'
import fruitsVeggiesImage from '../assets/img/fruits-veggies.jpg'


const OrderPage = () => {
    const params = useParams();

    if (!(params.key in orders)) {
        return "That order does not exist"
    }

    const order = orders[params.key];

    return (
        <React.Fragment>
            <Typography sx={{ marginTop: 2 }} variant="h5">Your order on {order.date}</Typography>
            <Box sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 8 }}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 700: 2, 1000: 3 }}>
                    <Masonry gutter="20px">

                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image={fruitsVeggiesImage}
                            />

                            <CardActionArea>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            Banana - Premium
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            ₹66.7
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label="5kg" size="small" />
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                            Buy 2 and get 25% off
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} component="div">
                                            Quantity: 3
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image={fruitsVeggiesImage}
                            />

                            <CardActionArea>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            Banana - Premium
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            ₹66.7
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label="5kg" size="small" />
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                            Buy 2 and get 25% off
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} component="div">
                                            Quantity: 3
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image={fruitsVeggiesImage}
                            />

                            <CardActionArea>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            Banana - Premium
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            ₹66.7
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label="5kg" size="small" />
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                            Buy 2 and get 25% off
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} component="div">
                                            Quantity: 3
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>


                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image={fruitsVeggiesImage}
                            />

                            <CardActionArea>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            Banana - Premium
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            ₹66.7
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label="5kg" size="small" />
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                            Buy 2 and get 25% off
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} component="div">
                                            Quantity: 3
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>


                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image={fruitsVeggiesImage}
                            />

                            <CardActionArea>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                                            Banana - Premium
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                                            ₹66.7
                                        </Typography>
                                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label="5kg" size="small" />
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                            Buy 2 and get 25% off
                                        </Typography>
                                        <Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} component="div">
                                            Quantity: 3
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Masonry>
                </ResponsiveMasonry>
            </Box>

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h6">Total: ₹333</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="error" variant="contained">Cancel Order</Button>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

export default OrderPage;
