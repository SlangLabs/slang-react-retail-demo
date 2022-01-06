import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const SearchBar = (props) => {

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
                    endAdornment={props.searchTerm.trim() !== ''
                        ? (<InputAdornment position="end">
                            <IconButton edge="end" onClick={props.clearSearch}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>)
                        : null
                    }
                    label="Amount"
                    value={props.searchTerm}
                    onChange={(event) => props.changeSearchTerm(event.target.value)}
                />
            </FormControl>
            <Button onClick={props.makeSearch} variant="contained" sx={{ marginLeft: 1, height: '100%', paddingTop: 2.4, paddingBottom: 2.4 }}><SearchIcon/></Button>
        </Box>
    );
}

export default SearchBar;