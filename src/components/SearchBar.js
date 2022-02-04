import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import data from '../data/data'
import { objectFilter, toObject } from '../Utils'


export let searchCallback = () => { };


const SearchBar = (props) => {
    const dataObj = toObject(data);

    const [searchTerm, changeSearchTerm] = useState('');

    const searchHasItems = (term) => {
        const filteredData = objectFilter(dataObj, (item) => (item.name.toLowerCase().includes(term)));
        return Object.keys(filteredData).length !== 0;
    }

    // Determine if the enter key was pressed
    const checkEnter = (event) => {
        if (event.key === 'Enter') {
            props.makeSearch(searchTerm);
        }
    }
    
    const clearSearch = () => {
        changeSearchTerm('');
        props.clearSearch();
    }

    searchCallback = (searchInfo, searchUserJourney) => {
        console.log(searchInfo);

        // For now we do not support add to cart
        if (searchInfo.isAddToCart) {
            searchUserJourney.setFailure();
            return searchUserJourney.AppStates.ADD_TO_CART;
        }

        const newTerm = searchInfo.item.productType

        // If the user searches for something like "organic" there are no cases to handle that so throw an error to the user
        console.log(newTerm);
        if (newTerm === null) {
            // return ''
            clearSearch();
            searchUserJourney.setItemNotSpecified();
            return searchUserJourney.AppStates.SEARCH_RESULTS;
        }

        changeSearchTerm(newTerm);
        props.makeSearch(newTerm);

        if (searchHasItems(newTerm)) {
            searchUserJourney.setSuccess();
        } else {
            searchUserJourney.setItemNotFound();
        }
        
        return searchUserJourney.AppStates.SEARCH_RESULTS;
    }
            
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ...props.sx }}>
            <FormControl fullWidth>
                <InputLabel sx={{ fontSize: 20 }} htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    onKeyPress={checkEnter}
                    sx={{ fontSize: 20 }}
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    endAdornment={/* Show the clear search term button if there is a search term */
                        searchTerm.trim() !== ''
                            ? (<InputAdornment position="end">
                                <IconButton edge="end" onClick={clearSearch}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>)
                            : null
                    }
                    label="Amount"
                    value={searchTerm}
                    onChange={/* Change the parent component's searchTerm state if the term has changed */
                        (event) => changeSearchTerm(event.target.value)
                    }
                />
            </FormControl>
            <Button onClick={() => props.makeSearch(searchTerm)} variant="contained" sx={{ marginLeft: 1, height: '100%', paddingTop: 2.4, paddingBottom: 2.4 }}><SearchIcon /></Button>
        </Box>
    );
}

export default SearchBar;