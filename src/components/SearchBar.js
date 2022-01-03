import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const SearchBar = (props) => {
    return (
        <FormControl fullWidth sx={props.sx}>
            <InputLabel sx={{ fontSize: 20 }} htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
                sx={{ fontSize: 20 }}
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                        >
                            <KeyboardVoiceIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                label="Amount"
            />
        </FormControl>
    );
}

export default SearchBar;