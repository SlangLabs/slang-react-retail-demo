import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, Button, List, ListItem, ListItemText, Drawer, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={props.closed}
            onKeyDown={props.closed}
        >
            <List>
                {pages.map((page) => (
                    <ListItem component={Link} to={page.link} button key={page.name}>
                        <ListItemText primary={page.name} />
                    </ListItem>
                ))}
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

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(true);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };


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


                    <Box>
                        <Badge badgeContent={4} color="secondary" overlap="circular">
                            <IconButton sx={{ color: 'white' }}>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
