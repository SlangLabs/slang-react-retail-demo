import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import GroceryItem from './GroceryItem';


const sliceObject = (obj, start, end) => {
    return Object.fromEntries(
        Object.entries(obj).slice(start, end)
    )
}


const incrementalShow = 20;


const GroceryList = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    let totalAmountOfData = Object.keys(props.groceries).length;

    console.log('total amt data', totalAmountOfData);

    // Show 20 items at a time
    const [numberShown, setNumberShown] = useState(Math.min(totalAmountOfData, incrementalShow));
    const [itemsShown, setItemsShown] = useState(sliceObject(props.groceries, 0, numberShown));

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setNumberShown(Math.min(totalAmountOfData, incrementalShow));
    }, [props.groceries])

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        const maxScroll = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight;

        // User has scrolled to the end of page, show more items
        if (Math.abs(maxScroll - scrollPosition) <= 50) {
            console.log('ree')
            if (numberShown === totalAmountOfData) {
                return;
            }
            setNumberShown(Math.min(totalAmountOfData, numberShown + incrementalShow))
        }

    }, [scrollPosition])

    useEffect(() => {
        console.log(numberShown);
        setItemsShown(sliceObject(props.groceries, 0, numberShown));
    }, [numberShown])

    return (
        <Box sx={props.sx}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2 }}>
                <Masonry gutter="20px">
                    {Array.from(Object.keys(itemsShown)).map((key, _) => (
                        <GroceryItem key={key} itemKey={key} item={itemsShown[key]} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    )
}

export default GroceryList;
