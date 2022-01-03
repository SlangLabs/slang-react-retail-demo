import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ResponsiveAppBar from "./components/Navbar"
import "./assets/App.css";
import mainTheme from './Theme';
import data from './data/data';
import HomePage from './pages/HomePage'
import OffersPage from './pages/OffersPage'
import ItemPage from './pages/ItemPage'
import OrderHistoryPage from './pages/OrderHistoryPage'


const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={mainTheme}>
            <CssBaseline />
                <ResponsiveAppBar/> 
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/offers" element={<OffersPage/>}/>
                        <Route path="/order-history" element={<OrderHistoryPage/>}/>

                        <Route path="item">
                            <Route path=":itemnumber" element={<ItemPage/>} />
                        </Route>

                    </Routes>
                </Container>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;