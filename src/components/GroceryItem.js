import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Box, Button, ButtonGroup, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../slices/cartSlice'
import { useTheme } from '@mui/material/styles';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import fruitsVeggiesImage from '../assets/img/fruits-veggies.jpg'


const GroceryItem = (props) => {
    // Get the amount of the current item
    const amount = useSelector((state) => state.cart.items[props.itemKey])
    const dispatch = useDispatch()
    const theme = useTheme();

    // Add one of the current item
    const itemAdded = () => {
        dispatch(addOne(props.itemKey));
    }

    // Remove one of the current item
    const itemRemoved = () => {
        dispatch(removeOne(props.itemKey));
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={fruitsVeggiesImage}
            />

            <CardActionArea sx={{ flex: '2 1 0' }} component={Link} to={`/item/${props.itemKey}`}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 12, sm: 17 } }} color="text.secondary" component="div">
                            ₹{props.item.price}
                        </Typography>
                        <Chip variant="outlined" sx={{ fontSize: { xs: 10, sm: 12 }, marginTop: 0.5 }} label={`${props.item.size}kg`} size="small" />
                        {'offer' in props.item
                            ? (<Typography sx={{ fontSize: { xs: 10, sm: 15 }, marginTop: 0.5 }} color="text.secondary" component="div">
                                {props.item.offer}
                            </Typography>)
                            : null
                        }
                    </CardContent>
                </Box>
            </CardActionArea>
            <Box sx={{ flex: '1 1 0', display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                {/* If there is no quantity of the current item, show an add button. Otherwise, show plus and minus buttons */}
                {amount === 0 || amount === undefined
                    ? <Button onClick={itemAdded} variant="contained">Add</Button>
                    : (<ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                        <Button onClick={itemAdded} sx={{ fontSize: { xs: 10, sm: 12 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button sx={{ fontSize: { xs: 12, sm: 15 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important', color: theme.palette.primary.main + '!important' }} disabled>{amount}</Button>
                        <Button onClick={itemRemoved} sx={{ fontSize: { xs: 10, sm: 12 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faMinus} /></Button>
                    </ButtonGroup>)
                }
            </Box>
        </Card>
    )
}

export default GroceryItem;
