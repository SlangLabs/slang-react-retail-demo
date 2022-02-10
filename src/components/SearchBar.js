import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import data from '../data/data'
import { objectFilter, toObject, getGCD } from '../Utils'
import appbase from '../api/appbase'


export let searchCallback = () => { };


const normalSearch = (searchInfo) => {

}


const SearchBar = (props) => {
    const dataObj = toObject(data);

    const [searchTerm, changeSearchTerm] = useState('');

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

    searchCallback = async (searchInfo, searchUserJourney) => {
        // For now we do not support add to cart
        if (searchInfo.isAddToCart) {
            searchUserJourney.setFailure();
            return searchUserJourney.AppStates.ADD_TO_CART;
        }


        // If the search request is not an add to cart request, simply query Appbase based on the info given
        if (!searchInfo.isAddToCart) {
            let newTerm = ''
            let termToDisplay = '';

            if (searchInfo.item.brand !== null) {
                newTerm += searchInfo.item.brand;
            }

            if (searchInfo.item.variants !== null) {
                newTerm += ' ' + searchInfo.item.variants.join(' ');
            }

            if (searchInfo.item.productType !== null) {
                newTerm += ' ' + searchInfo.item.productType;
            }

            termToDisplay = newTerm;

            if (searchInfo.item.size !== null) {
                if (searchInfo.item.size.unit !== 'KILOGRAM') {
                    searchUserJourney.setFailure();
                    return searchUserJourney.AppStates.SEARCH_RESULTS;
                }

                const size = Math.round(searchInfo.item.size.amount)

                newTerm += ' ' + getGCD(size) + ' kg';
                termToDisplay += ' ' + size +  ' kg';
            }

            if (newTerm === null) {
                // return ''
                clearSearch();
                searchUserJourney.setItemNotSpecified();
                return searchUserJourney.AppStates.SEARCH_RESULTS;
            }

            changeSearchTerm(termToDisplay);

            console.log(newTerm);

            if (await props.makeSearch(newTerm)) {
                searchUserJourney.setSuccess();
            } else {
                searchUserJourney.setItemNotFound();
            }
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