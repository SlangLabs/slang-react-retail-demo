import React, { useEffect, useState } from 'react';
import { Typography, Box, Alert, Snackbar, CircularProgress, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter, toObject } from '../Utils'
import { slangCallbacks } from '../App'
import { query } from '../api/appbase'


// The home page component
const HomePage = () => {
    const dataObj = toObject(data);

    // Convert the array into a object where the key is the index of the object
    const [groceries, setGroceries] = useState(dataObj);
    const [searchToBeMade, setSearchToBeMade] = useState(false);
    const [voiceSearchError, setVoiceSearchError] = useState(false);
    const dispatch = useDispatch();

    // On enter press or search button press, change the groceries state item
    const makeSearch = async (searchTerm) => {
        setSearchToBeMade(true);

        const value = await query(searchTerm);

        const hits = value.search.hits.hits;

        const items = {}

        for (const hit of hits) {
            items[hit._source.id - 1] = hit._source;
        }

        console.log(items)


        // const filteredData = objectFilter(dataObj, (item) => (item.name.toLowerCase().includes(fixedSearchTerm)));
        setGroceries(items);
        setSearchToBeMade(false);
    }

    // Clear the search term and set the groceries back to all items
    const clearSearch = () => {
        setGroceries(dataObj);
    }


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
            <SearchBar setGroceries={setGroceries} clearSearch={clearSearch} makeSearch={makeSearch} sx={{ marginTop: 2 }} />

            {searchToBeMade
                ? <Grid sx={{ marginTop: 2 }} container justifyContent="center">
                    <CircularProgress />
                </Grid>
                : (Object.keys(groceries).length > 0
                        ? <GroceryList groceries={groceries} sx={{ marginBottom: 2, marginTop: 3 }} />
                        : <Typography sx={{ marginTop: 2 }} variant="h6" color="text.secondary">No items came up with the provided search term.</Typography>
                )
            }

            
        </Box>
    );
}

export default HomePage;
