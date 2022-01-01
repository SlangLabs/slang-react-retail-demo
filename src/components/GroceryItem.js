import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Box, Button, ButtonGroup } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const GroceryItem = () => {
    const [cart, changeCart] = useState(null);

    const itemAdded = () => {
        changeCart(1);
    }

    return <Card sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 120 }}
            image="https://static.onecms.io/wp-content/uploads/sites/20/2021/03/01/fruits-veggies1-2000.jpg"
        />

        <CardActionArea sx={{ flex: '2 1 0' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                <CardContent>
                    <Typography sx={{ fontSize: { xs: 15, sm: 20 } }} component="div" variant="h5">
                        Bananas
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 12, sm: 17 } }}  color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
            </Box>
        </CardActionArea>
        <Box sx={{ flex: '1 1 0', display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
            {/* <Button onClick={itemAdded} variant="contained">Add</Button> */}
            <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                <Button sx={{ fontSize: { xs: 10, sm: 12 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faMinus} /></Button>
                <Button sx={{ fontSize: { xs: 10, sm: 12 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }} disabled>0</Button>
                <Button sx={{ fontSize: { xs: 10, sm: 12 }, maxWidth: { xs: '20px', sm: '30px' }, minWidth: '20px!important' }}><FontAwesomeIcon icon={faPlus} /></Button>
            </ButtonGroup>
        </Box>


    </Card>
}

export default GroceryItem;
