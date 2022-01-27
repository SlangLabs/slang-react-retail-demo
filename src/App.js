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
import { reset, action } from './slices/assistantSlice'


SlangRetailAssistant.init({
    requestedLocales: ['en-IN'],
    assistantID: '815199d4e21c40489370d691f6d6c364',
    apiKey: '7cbb0751404d494ab84dc7c1a7828e3c',
})


SlangRetailAssistant.ui.show();


const App = () => {
    // Get the theme value from Redux and create the theme
    const themeVal = useSelector((state) => state.theme.value)
    const theme = createTheme(palette(themeVal));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderManagement = (orderInfo, orderManagementUserJourney) => {
        console.log('order', orderInfo, orderManagementUserJourney)

        navigate('/order-history');

        dispatch(action({ action: 'order', info: JSON.parse(JSON.stringify(orderInfo)) }));

        orderManagementUserJourney.setViewSuccess();
        return orderManagementUserJourney.AppStates.VIEW_ORDER;
    }

    const search = async (searchInfo, searchUserJourney) => {           
        navigate('/');

        console.log('search', searchInfo, searchUserJourney)

        dispatch(action({ action: 'search', info: JSON.parse(JSON.stringify(searchInfo)) }));

        // searchUserJourney.setFailure();
        return searchUserJourney.AppStates.ADD_TO_CART;
    }

    const navigation = (navigationInfo, navigationUserJourney) => {
        console.log('navi', navigationInfo, navigationUserJourney)

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
            default:
                
        }
    
        navigationUserJourney.setNavigationSuccess();
        return navigationUserJourney.AppState.NAVIGATION;
    }

    const actionHandler = {
        onSearch: search,
        onOrderManagement: orderManagement,
        onNavigation: navigation,
    }

    SlangRetailAssistant.setAction(actionHandler);


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