import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import OrderHistoryItem from '../components/OrderHistoryItem'
import data from '../data/data';

const OrderPage = () => {
    const params = useParams();

    return params.key
}

export default OrderPage;
