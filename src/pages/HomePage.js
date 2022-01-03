import React, { useState } from 'react';
import SearchBar from '../components/SearchBar'
import GroceryList from '../components/GroceryList'
import data from '../data/data'


const HomePage = () => {
    const [groceries, setGroceries] = useState(data);

    return (
        <React.Fragment>
            <SearchBar sx={{ marginTop: 3, marginBottom: 3 }} />
            <GroceryList groceries={groceries}/>
        </React.Fragment>
    );
}

export default HomePage;
