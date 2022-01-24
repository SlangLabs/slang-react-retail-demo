import React, { useEffect, useState } from 'react';
import { Typography, Box, Alert, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import { reset, action } from '../slices/assistantSlice'
import data from '../data/data'
import { objectFilter } from '../Utils'


// The home page component
const HomePage = () => {
    const [groceries, setGroceries] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchToBeMade, setSearchToBeMade] = useState(false);
    const [voiceSearchError, setVoiceSearchError] = useState(false);
    const searchValue = useSelector((state) => state.assistant.data);
    const dispatch = useDispatch();

    // On enter press or search button press, change the groceries state item
    const makeSearch = () => {
        const fixedSearchTerm = searchTerm.trim().toLowerCase();
        const filteredData = objectFilter(data, (item) => (item.name.toLowerCase().includes(fixedSearchTerm) || item.description.toLowerCase().includes(fixedSearchTerm)));
        setGroceries(filteredData);
        setSearchToBeMade(false);
    }

    // Clear the search term and set the groceries back to all items
    const clearSearch = () => {
        setSearchTerm('');
        setGroceries(data);
    }

    useEffect(() => {
        if (searchValue.action === 'search') {
            dispatch(reset());
            const searchTerm = searchValue.info.item.productType
            // If the user searches for something like "organic" there are no cases to handle that so throw an error to the user
            console.log(searchTerm);
            if (searchTerm === null) {
                setVoiceSearchError(true);
                clearSearch();
                return;
            }
            setSearchTerm(searchTerm);
            setSearchToBeMade(true);
        }
    }, [searchValue])

    useEffect(() => {
        if (searchToBeMade) {
            makeSearch();
        }
    }, [searchToBeMade])

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
