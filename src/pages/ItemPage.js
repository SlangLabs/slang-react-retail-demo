import React from 'react';
import { Grid, Typography, Chip, Box, Button, ButtonGroup } from '@mui/material';
import { useParams } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../slices/cartSlice'
import NotFoundPage from './NotFoundPage'
import data from '../data/data'
import fruitsVeggiesImage from '../assets/img/fruits-veggies.jpg'


// The page for a specific item
const ItemPage = () => {
    const params = useParams();
    const theme = useTheme();

    let itemKey = params.itemKey;

    // Determine if the item key (provided in the params) is invalid
    const isInvalid = !data.hasOwnProperty(itemKey);

    // We are forced to do this since hooks cannot be called conditionally
    const amount = useSelector((state) => {
        if (isInvalid) return null;
        return state.cart.items[itemKey]
    })

    const dispatch = useDispatch()

    // If the key is not part of any item, go to 404 page
    if (isInvalid) {
        return <NotFoundPage/>;
    }

    // Get the item's attributes
    const item = data[itemKey];

    return (
        <Grid sx={{ marginTop: 1, marginBottom: 2 }} container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h3">{item.name}</Typography>
                {'offer' in item
                    ? <Typography color="text.secondary" variant="subtitle1">{item.offer}</Typography>
                    : null
                }
                {/* If there is a nonzero number of the current item, show the plus and minus buttons, otherwise, show the add button */}
                {amount === 0 || amount === undefined
                    ? <Button size="large" sx={{ marginTop: 2 }} onClick={() => dispatch(addOne(itemKey))} variant="contained">Add</Button>
                    : (<ButtonGroup sx={{ marginTop: 2 }} size="large" variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => dispatch(addOne(itemKey))} sx={{ maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button sx={{ fontSize: { xs: 15, md: 17 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important', color: theme.palette.primary.main + '!important' }} disabled>{amount}</Button>
                        <Button onClick={() => dispatch(removeOne(itemKey))} sx={{ maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faMinus} /></Button>
                    </ButtonGroup>)
                }

                <Typography sx={{ marginTop: 2 }} variant="h5">₹{item.price.toFixed(2)}</Typography>
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
