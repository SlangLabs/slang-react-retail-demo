import React, { useEffect, useState } from 'react';
import { Typography, Box, Alert, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter, toObject } from '../Utils'
import { slangCallbacks } from '../App'
 

// The home page component
const HomePage = () => {
    const dataObj = toObject(data);
    
    // Convert the array into a object where the key is the index of the object
    const [groceries, setGroceries] = useState(dataObj);
    const [searchToBeMade, setSearchToBeMade] = useState(false);
    const [voiceSearchError, setVoiceSearchError] = useState(false);
    const dispatch = useDispatch();

    const searchHasItems = (term) => {
        const filteredData = objectFilter(dataObj, (item) => (item.name.toLowerCase().includes(term)));
        return Object.keys(filteredData).length !== 0;
    }

    // On enter press or search button press, change the groceries state item
    const makeSearch = (searchTerm) => {
        const fixedSearchTerm = searchTerm.trim().toLowerCase();
        const filteredData = objectFilter(dataObj, (item) => (item.name.toLowerCase().includes(fixedSearchTerm)));
        setGroceries(filteredData);
        setSearchToBeMade(false);
    }

    // Clear the search term and set the groceries back to all items
    const clearSearch = () => {
        console.log('bruh')
        setGroceries(dataObj);
    }

    // console.log(groceries);

    return (

        <Box sx={{ marginTop: 2 }}>
            <Snackbar autoHideDuration={6000} open={voiceSearchError} onClose={() => setVoiceSearchError(false)}>
                <Alert onClose={() => setVoiceSearchError(false)} severity="error" sx={{ width: '100%' }}>
                    You performed an invalid search.
                </Alert>
            </Snackbar>

            <Typography variant='h5'>
                Items
            </Typography>

            {/* Show the search bar component */}
            <SearchBar clearSearch={clearSearch} makeSearch={makeSearch} sx={{ marginTop: 2 }} />

            {/* If no items were found, let the user know, otherwise, show the items */}
            {Object.keys(groceries).length > 0
                ? <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 3 }} />
                : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">No items came up with the provided search term.</Typography>
            }
        </Box>
    );
}

export default HomePage;
