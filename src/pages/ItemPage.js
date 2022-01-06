import React, { useState } from 'react';
import { Grid, Typography, Chip, Paper, Box, Button, ButtonGroup } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../slices/cartSlice'
import data from '../data/data'
import fruitsVeggiesImage from '../assets/img/fruits-veggies.jpg'


const ItemPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    let itemKey = params.itemKey;

    const isInvalid = !data.hasOwnProperty(itemKey);

    // We are forced to do this since hooks cannot be called conditionally
    const amount = useSelector((state) => {
        if (isInvalid) return null;
        return state.cart.items[itemKey]
    })

    const dispatch = useDispatch()

    const itemAdded = () => {
        dispatch(addOne(itemKey));
    }

    const itemRemoved = () => {
        dispatch(removeOne(itemKey));
    }

    // If the provided item number is not actually a number or the item number is too large (or too small)
    if (isInvalid) {
        return 'Invalid item number'
    }

    const item = data[itemKey];

    return (
        <Grid sx={{ marginTop: 1, marginBottom: 2 }} container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h3">{item.name}</Typography>
                {'offer' in item
                    ? <Typography color="text.secondary" variant="subtitle1">{item.offer}</Typography>
                    : null
                }
                {amount === 0 || amount === undefined
                    ? <Button size="large" sx={{ marginTop: 2 }} onClick={itemAdded} variant="contained">Add</Button>
                    : (<ButtonGroup sx={{ marginTop: 2 }} size="large" variant="contained" aria-label="outlined primary button group">
                        <Button onClick={itemAdded} sx={{ maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button sx={{ fontSize: { xs: 15, md: 17 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important', color: theme.palette.primary.main + '!important' }} disabled>{amount}</Button>
                        <Button onClick={itemRemoved} sx={{ maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faMinus} /></Button>
                    </ButtonGroup>)
                }

                <Typography sx={{ marginTop: 2 }} variant="h5">₹{item.price}</Typography>
                <Chip sx={{ marginTop: 2 }} label={`${item.size}kg`} variant="outlined" />
                <Typography sx={{ marginTop: 2, whiteSpace: 'pre-line' }}>{item.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box
                    component="img"
                    sx={{ width: '100%', margin: '0!important', boxShadow: 3, borderRadius: 2 }}
                    alt={`${item.name}`}
                    src={fruitsVeggiesImage}
                />

            </Grid>
        </Grid>
    );
}

export default ItemPage;
