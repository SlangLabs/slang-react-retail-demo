import React from 'react';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import GroceryItem from './GroceryItem';

const GroceryList = (props) => {
    return (
        <Box sx={{ marginBottom: 2 }}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2 }}>
                <Masonry gutter="20px">
                    {Array.from(Object.keys(props.groceries)).map((key, index) => (
                        <GroceryItem key={key} itemKey={key} item={props.groceries[key]} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    )
}

export default GroceryList;
