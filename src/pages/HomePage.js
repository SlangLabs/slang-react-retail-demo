import React, { useState } from 'react';
import { Typography, Box } from '@mui/material'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter } from '../Utils'


const HomePage = () => {
    const [groceries, setGroceries] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    const makeSearch = () => {
        const fixedSearchTerm = searchTerm.trim().toLowerCase();
        const filteredData = objectFilter(data, (item) => (item.name.toLowerCase().includes(fixedSearchTerm) || item.description.toLowerCase().includes(fixedSearchTerm)));
        setGroceries(filteredData)
    }

    const changeSearchTerm = (term) => {
        setSearchTerm(term)
    }

    const clearSearch = () => {
        setSearchTerm('');
        setGroceries(data);
    }

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography variant='h5'>
                Items
            </Typography>

            <SearchBar clearSearch={clearSearch} makeSearch={makeSearch} changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} sx={{ marginTop: 2 }} />

            {Object.keys(groceries).length > 0
                ? <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 3 }} />
                : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">No items came up with the provided search term.</Typography>
            }
        </Box>
    );
}

export default HomePage;
