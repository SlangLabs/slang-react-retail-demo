import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ResponsiveAppBar from "./components/Navbar"
import "./assets/App.css";
import mainTheme from './Theme';

const Home = () => {
    return <div>Home</div>;
}

const Offers = () => {
    return <div>Offers</div>;
}

const OrderHistory = () => {
    return <div>Order History</div>;
}

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={mainTheme}>
            <CssBaseline />
                <ResponsiveAppBar/> 
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/offers" element={<Offers/>}/>
                        <Route path="/order-history" element={<OrderHistory/>}/>
                    </Routes>
                </Container>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;