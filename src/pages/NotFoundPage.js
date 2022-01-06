import React from 'react';
import { Typography } from '@mui/material'

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <Typography sx={{ marginBottom: 2, marginTop: 2 }} variant="h2">Page not found</Typography>
            <Typography variant="h5" color="text.secondary">The page that you've gone to doesn't exist.</Typography>
        </React.Fragment>
    );
}

export default NotFoundPage;
