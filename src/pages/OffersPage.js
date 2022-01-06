import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter } from '../Utils'


const OffersPage = () => {
    const [groceries, setGroceries] = useState(objectFilter(data, (item) => { return item.hasOwnProperty('offer') }));

    return (
        <React.Fragment>
            <Typography sx={{ marginTop: 2 }} variant='h5'>
                Offers
            </Typography>

            <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 2 }} />
        </React.Fragment>
    );
}

export default OffersPage;