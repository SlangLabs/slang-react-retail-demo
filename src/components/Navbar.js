import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, Button, List, ListItem, ListItemText, Drawer, Badge, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux'
import { dark, light } from '../slices/themeSlice'
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../assets/img/logo.png';

// List all of the pages that the navbar and drawer must show
const pages = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Offers',
        link: '/offers',
    },
    {
        name: 'Order History',
        link: '/order-history',
    },
]

// The theme toggle switch
const ThemeToggle = (props) => {
    const themeVal = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    // If the theme is changed, dispatch the respective theme changed event
    const themeChanged = (event) => {
        if (event.target.checked) dispatch(dark());
        else dispatch(light());
    }

    return (
        <React.Fragment>
            <WbSunnyIcon sx={{ height: 'auto' }} />
            <Switch onChange={themeChanged} checked={themeVal === 'dark' ? true : false} />
            <DarkModeIcon sx={{ height: 'auto' }} />
        </React.Fragment>
    );
}


// The navigation drawer that is shown on smaller screen sizes
const TemporaryDrawer = (props) => {

    // Get a list of navigation list items
    const list = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {pages.map((page) => (
                    <ListItem onClick={props.closed} component={Link} to={page.link} button key={page.name}>
                        <ListItemText primary={page.name} />
                    </ListItem>
                ))}
                <ListItem>
                    <ThemeToggle/>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Drawer open={props.open} onClose={props.closed}>
                {list()}
            </Drawer>
        </React.Fragment>
    );
}


const ResponsiveAppBar = () => {
    const [drawerOpen, setDrawer] = React.useState(false);

    // Get the amount of items in the cart
    const amountInCart = useSelector((state) => Object.keys(state.cart.items).length)

    // Handle close and open drawer events
    const handleOpenDrawer = (event) => {
        setDrawer(true);
    };
    const handleCloseDrawer = () => {
        setDrawer(false);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ height: '20px', mr: 2, display: { xs: 'none', md: 'flex' } }} component={Link} to="/">
                        <img alt="Slang Labs logo" style={{ height: '20px' }} src={logo} />
                    </Box>

                    {/* The open drawer icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenDrawer}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>

                    <TemporaryDrawer closed={handleCloseDrawer} open={drawerOpen} />
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} component={Link} to="/">
                        <img alt="Slang Labs logo" style={{ height: '20px' }} src={logo} />
                    </Box>

                    {/* Each page's link button in the navbar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                onClick={handleCloseDrawer}
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                                to={page.link}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: 2 }}>
                        <ThemeToggle/>
                    </Box>

                    {/* Show the shopping cart icon if there are items in the cart */}
                    {amountInCart > 0
                        ? <Box>
                            <Badge badgeContent={amountInCart} color="secondary" overlap="circular">
                                <IconButton component={Link} to="/cart" sx={{ color: 'white' }}>
                                    <ShoppingCartOutlinedIcon />
                                </IconButton>
                            </Badge>
                        </Box>
                        : null
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
