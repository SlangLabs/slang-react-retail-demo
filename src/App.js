import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { light, dark } from './slices/themeSlice'
import ResponsiveAppBar from "./components/Navbar"
import "./assets/App.css";
import palette from './Theme';
import HomePage from './pages/HomePage'
import OffersPage from './pages/OffersPage'
import ItemPage from './pages/ItemPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'
import ScrollToTop from './Utils'


const App = () => {
    const themeVal = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    const themeFromLS = localStorage.getItem('theme');

    if (themeFromLS !== undefined) {
        if (themeFromLS === 'light') dispatch(light());
        else dispatch(dark());
    }

    const theme = createTheme(palette(themeVal));

    return (
        <React.StrictMode>
            <ScrollToTop/>
            <ThemeProvider theme={theme}>
            <CssBaseline />
                <ResponsiveAppBar /> 
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/offers" element={<OffersPage/>}/>
                        <Route path="/order-history" element={<OrderHistoryPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>

                        <Route path="item">
                            <Route path=":itemnumber" element={<ItemPage/>} />
                        </Route>

                        <Route path="order">
                            <Route path=":key" element={<OrderPage/>} />
                        </Route>

                    </Routes>
                </Container>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;