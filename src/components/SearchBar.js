import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = (props) => {

    // Determine if the enter key was pressed
    const checkEnter = (event) => {
        if (event.key === 'Enter') {
            props.makeSearch();
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
                        props.searchTerm.trim() !== ''
                        ? (<InputAdornment position="end">
                            <IconButton edge="end" onClick={props.clearSearch}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>)
                        : null
                    }
                    label="Amount"
                    value={props.searchTerm}
                    onChange={/* Change the parent component's searchTerm state if the term has changed */
                        (event) => props.changeSearchTerm(event.target.value)
                    }
                />
            </FormControl>
            <Button onClick={props.makeSearch} variant="contained" sx={{ marginLeft: 1, height: '100%', paddingTop: 2.4, paddingBottom: 2.4 }}><SearchIcon/></Button>
        </Box>
    );
}

export default SearchBar;