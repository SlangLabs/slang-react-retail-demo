import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, Button, List, ListItem, ListItemText, Drawer, Badge, Switch, FormControlLabel } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../slices/cartSlice'
import { dark, light } from '../slices/themeSlice'
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../assets/img/logo.png';


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


const TemporaryDrawer = (props) => {
    const themeVal = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    const themeChanged = (event) => {
        if (event.target.checked) dispatch(dark());
        else dispatch(light());
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {pages.map((page) => (
                    <ListItem onClick={props.closed} component={Link} to={page.link} button key={page.name}>
                        <ListItemText primary={page.name} />
                    </ListItem>
                ))}
                <ListItem>
                    <WbSunnyIcon />
                    <Switch onChange={themeChanged} checked={themeVal === 'dark' ? true : false} />
                    <DarkModeIcon />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Drawer
                open={props.open}
                onClose={props.closed}
            >
                {list()}

            </Drawer>
        </React.Fragment>
    );
}

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(false);

    const themeVal = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    const amountInCart = useSelector((state) => Object.keys(state.cart.items).length)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(true);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };

    const themeChanged = (event) => {
        if (event.target.checked) dispatch(dark());
        else dispatch(light());
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ height: '20px', mr: 2, display: { xs: 'none', md: 'flex' } }} component={Link} to="/">
                        <img alt="Slang Labs logo" style={{ height: '20px' }} src={logo} />
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <TemporaryDrawer closed={handleCloseNavMenu} open={anchorElNav} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} component={Link} to="/">
                        <img alt="Slang Labs logo" style={{ height: '20px' }} src={logo} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                                to={page.link}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <WbSunnyIcon sx={{ height: 'auto' }} />
                        <Switch onChange={themeChanged} checked={themeVal === 'dark' ? true : false} />
                        <DarkModeIcon sx={{ marginRight: 2, height: 'auto' }} />
                    </Box>


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
