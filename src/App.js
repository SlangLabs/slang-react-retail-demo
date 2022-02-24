import React, { useState, useEffect } from 'react';
import { Routes, Route, Redirect, useNavigate } from "react-router-dom";
import { CssBaseline, Container, Snackbar, Alert } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import SlangRetailAssistant from '@slanglabs/slang-retail-assistant';
import ResponsiveAppBar from "./components/Navbar"
import "./assets/App.css";
import palette from './Theme';
import HomePage from './pages/HomePage'
import OffersPage from './pages/OffersPage'
import ItemPage from './pages/ItemPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import { ScrollToTop } from './Utils'
import { searchCallback } from './components/SearchBar'
import { orderCallback } from './pages/OrderHistoryPage'


SlangRetailAssistant.init({
    requestedLocales: ['en-IN'],
    assistantID: '815199d4e21c40489370d691f6d6c364',
    apiKey: '7cbb0751404d494ab84dc7c1a7828e3c',
})

// SlangRetailAssistant.ui.setTriggerPosition("TOP_RIGHT");

SlangRetailAssistant.ui.show();


export const slangCallbacks = { };


const App = () => {
    // Get the theme value from Redux and create the theme
    const themeVal = useSelector((state) => state.theme.value)
    const theme = createTheme(palette(themeVal));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(SlangRetailAssistant.ui);

    console.log(SlangRetailAssistant);


    // To implement
    const onOrderManagementCallback = (orderInfo, orderManagementUserJourney) => {
        navigate('/order-history');

        return orderCallback(orderInfo, orderManagementUserJourney);
    }

    const onSearchCallback = (searchInfo, searchUserJourney) => {           
        navigate('/');

        return searchCallback(searchInfo, searchUserJourney);
    }

    const onNavigationCallback = (navigationInfo, navigationUserJourney) => {
        switch (navigationInfo.target) {
            case 'back':
                navigate(-1);
                break;
            case 'order':
                navigate('/order-history');
                break;
            case 'cart':
                navigate('/cart');
                break;
            case 'home':
                navigate('/');
                break;
            case null:
                navigationUserJourney.setTargetNotSpecified();
                return navigationUserJourney.AppState.NAVIGATION; 
            default:
                navigationUserJourney.setNavigationFailure();
                return navigationUserJourney.AppState.NAVIGATION; 
        }

        navigationUserJourney.setNavigationSuccess();

        return navigationUserJourney.AppState.NAVIGATION; 
    }

    SlangRetailAssistant.setAction({
        onSearch: onSearchCallback,
        onOrderManagement: onOrderManagementCallback,
        onNavigation: onNavigationCallback
    })


    return (
        <React.StrictMode>

            <ScrollToTop />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ResponsiveAppBar />
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/offers" element={<OffersPage />} />
                        <Route path="/order-history" element={<OrderHistoryPage />} />
                        <Route path="/cart" element={<CartPage />} />

                        <Route path="item">
                            <Route path=":itemKey" element={<ItemPage />} />
                        </Route>

                        <Route path="order">
                            <Route path=":key" element={<OrderPage />} />
                        </Route>

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;