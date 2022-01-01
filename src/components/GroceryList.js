import React from 'react';
import { Grid } from '@mui/material';
import GroceryItem from './GroceryItem';

const GroceryList = () => {
    return (
        <Grid sx={{ marginBottom: 3 }} container spacing={{ xs: 2, md: 3 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={12} sm={12} md={6} key={index}>
                    <GroceryItem/>
                </Grid>
            ))}
        </Grid>
    )
}

export default GroceryList;
