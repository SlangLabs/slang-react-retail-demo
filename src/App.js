import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ResponsiveAppBar from "./components/Navbar"
import "./assets/App.css";
import mainTheme from './Theme';
import HomePage from './pages/HomePage'
import OffersPage from './pages/OffersPage'
import ItemPage from './pages/ItemPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'
import ScrollToTop from './Utils'


const App = () => {
    return (
        <React.StrictMode>
            <ScrollToTop/>
            <ThemeProvider theme={mainTheme}>
            <CssBaseline />
                <ResponsiveAppBar/> 
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