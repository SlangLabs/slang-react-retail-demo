import React from 'react';
import { Card, CardActionArea, Typography, CardContent, Button, ButtonGroup, Box, Chip } from '@mui/material';
import { Link } from "react-router-dom";

const OrderHistoryItem = (props) => {
    return (
        <Card>
            <CardActionArea sx={{ display: 'flex' }} component={Link} to={`/order/${props.id}`}>
                <Box sx={{ flex: '2 1 0', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                            {props.order.date}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                            {props.order.items} item(s)
                        </Typography>
                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label={props.order.status} size="small" />
                    </CardContent>
                </Box>
            
            <Box sx={{ flex: '1 1 0', display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} component="div">
                    ₹{props.order.price}
                </Typography>
            </Box>
            </CardActionArea>
        </Card>
    );
}

export default OrderHistoryItem;
