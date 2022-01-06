import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'
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


const App = () => {
    // Get the theme value from Redux and create the theme
    const themeVal = useSelector((state) => state.theme.value)
    const theme = createTheme(palette(themeVal));

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

                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;