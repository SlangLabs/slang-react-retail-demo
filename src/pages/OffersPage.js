import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter } from '../Utils'


// The offers page
const OffersPage = () => {
    // Get all objects that have an 'offer' property in them
    const [groceries, setGroceries] = useState(objectFilter(data, (item) => { return item.hasOwnProperty('offer') }));

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography variant='h5'>Offers</Typography>

            <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 2 }} />
        </Box>
    );
}

export default OffersPage;