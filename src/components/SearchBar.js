import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux'
import { add } from '../slices/cartSlice'
import data from '../data/data'
import { objectFilter, toObject, getGCD } from '../Utils'
import appbase, { query } from '../api/appbase'


export let searchCallback = () => { };


const SearchBar = (props) => {
    const dataObj = toObject(data);
    const dispatch = useDispatch();

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
            }

            if (newTerm === null) {
                // return ''
                clearSearch();
                searchUserJourney.setItemNotSpecified();
                return searchUserJourney.AppStates.SEARCH_RESULTS;
            }

            changeSearchTerm(termToDisplay);

            if (await props.makeSearch(newTerm)) {
                searchUserJourney.setSuccess();
            } else {
                searchUserJourney.setItemNotFound();
            }

            return searchUserJourney.AppStates.SEARCH_RESULTS;
        } else if (searchInfo.isAddToCart) { // The user has requested to add an item to the cart
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

            let size = 0;
            let sizeGCD = 0;

            if (searchInfo.item.size !== null) {
                if (searchInfo.item.size.unit !== 'KILOGRAM') {
                    searchUserJourney.setFailure();
                    return searchUserJourney.AppStates.ADD_TO_CART;
                }

                size = Math.round(searchInfo.item.size.amount)
                sizeGCD = getGCD(size);

                newTerm += ' ' + sizeGCD + ' kg';
            } else { // Ask for a size
                changeSearchTerm(termToDisplay);
                await props.makeSearch(newTerm);

                searchUserJourney.setNeedItemQuantity();
                return searchUserJourney.AppStates.ADD_TO_CART;
            }

            newTerm = newTerm.trim();
            termToDisplay = termToDisplay.trim();
            
            let searchQuery = await query(newTerm);
            const hits = searchQuery.search.hits.hits;

            if (hits.length === 0) {
                changeSearchTerm(termToDisplay);
                await props.makeSearch(newTerm);

                searchUserJourney.setItemNotFound();
                return searchUserJourney.AppStates.ADD_TO_CART;
            }

            const scores = {};

            const maxScore = hits[0]._score;

            for (const item of hits) {
                if (scores.hasOwnProperty(item._score)) scores[item._score]++;
                else scores[item._score] = 1;
            }

            // Item is ambiguous
            if (scores[maxScore] !== 1) {
                changeSearchTerm(termToDisplay);
                await props.makeSearch(newTerm);

                searchUserJourney.setNeedDisambiguation();
                return searchUserJourney.AppStates.ADD_TO_CART;
            }

            const itemToAdd = hits[0]._source;

            changeSearchTerm(termToDisplay);
            await props.makeSearch(newTerm);

            dispatch(add({id: itemToAdd.id - 1, amount: (size / sizeGCD)}));

            searchUserJourney.setSuccess();
            return searchUserJourney.AppStates.ADD_TO_CART;
        }
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