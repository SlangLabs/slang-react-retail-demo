import React, { useState } from 'react';
import { Typography, Box } from '@mui/material'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter } from '../Utils'


// The home page component
const HomePage = () => {
    const [groceries, setGroceries] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    // On enter press or search button press, change the groceries state item
    const makeSearch = () => {
        const fixedSearchTerm = searchTerm.trim().toLowerCase();
        const filteredData = objectFilter(data, (item) => (item.name.toLowerCase().includes(fixedSearchTerm) || item.description.toLowerCase().includes(fixedSearchTerm)));
        setGroceries(filteredData)
    }

    // Clear the search term and set the groceries back to all items
    const clearSearch = () => {
        setSearchTerm('');
        setGroceries(data);
    }

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography variant='h5'>
                Items
            </Typography>

            {/* Show the search bar component */}
            <SearchBar clearSearch={clearSearch} makeSearch={makeSearch} changeSearchTerm={(term) => (setSearchTerm(term))} searchTerm={searchTerm} sx={{ marginTop: 2 }} />

            {/* If no items were found, let the user know, otherwise, show the items */}
            {Object.keys(groceries).length > 0
                ? <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 3 }} />
                : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">No items came up with the provided search term.</Typography>
            }
        </Box>
    );
}

export default HomePage;
