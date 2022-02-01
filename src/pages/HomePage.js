import React, { useEffect, useState } from 'react';
import { Typography, Box, Alert, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'
import { objectFilter } from '../Utils'
import { slangCallbacks } from '../App'


export let searchCallback = () => { console.log('bruh') };


const toObject = (arr) => {
    return arr.reduce((o, item, index) => ({ ...o, [index]: item}), {})
}


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

    // searchCallback = (searchInfo, searchUserJourney) => {
    //     console.log(searchInfo);

    //     // For now we do not support add to cart
    //     if (searchInfo.isAddToCart) {
    //         searchUserJourney.setFailure();
    //         return searchUserJourney.AppStates.ADD_TO_CART;
    //     }

    //     const searchTerm = searchInfo.item.productType

    //     // If the user searches for something like "organic" there are no cases to handle that so throw an error to the user
    //     console.log(searchTerm);
    //     if (searchTerm === null) {
    //         // return ''
    //         clearSearch();
    //         searchUserJourney.setItemNotSpecified();
    //         return searchUserJourney.AppStates.SEARCH_RESULTS;
    //     }

    //     setSearchTerm(searchTerm);
    //     setSearchToBeMade(true);

    //     if (searchHasItems(searchTerm)) {
    //         searchUserJourney.setSuccess();
    //     } else {
    //         searchUserJourney.setItemNotFound();
    //     }
        
    //     return searchUserJourney.AppStates.SEARCH_RESULTS;
    // }
            

    // useEffect(() => {
    //     if (searchToBeMade) {
    //         makeSearch();
    //     }
    // }, [searchToBeMade])

    console.log(groceries);

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
