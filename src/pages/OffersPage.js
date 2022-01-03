import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'


const OffersPage = () => {
    const [groceries, setGroceries] = useState(data.filter((item) => { return 'offer' in item }));

    return (
        <React.Fragment>
            <Typography sx={{ marginTop: 2 }} variant='h5'>
                Offers
            </Typography>

            <SearchBar sx={{ marginTop: 2, marginBottom: 3 }} />
            <GroceryList groceries={groceries} />
        </React.Fragment>
    );
}

export default OffersPage;