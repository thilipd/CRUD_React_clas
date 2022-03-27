
import './App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





const pages = ['Home', 'About', 'Shop'];


const ResponsiveAppBar = () => {




    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    const checkForShop = (page) => {




        if (page !== "Shop") {

            return (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1, color: 'black', display: 'block' }}
                >
                    {page}
                </Button>
            )
        } else {

            return (
                < Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1, color: 'black', display: 'flex', alignItems: "center" }}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    {page}
                </Button  >

            )

        }
    }

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "white",
                color: "black",
            }}>
            <Container maxWidth="xl" >
                <Toolbar sx={{ mx: 5 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "black" }}
                    >
                        Start Bootstrap
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (

                                (checkForShop(page))

                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Start Bootstrap
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => ((checkForShop(page))))}
                    </Box>

                    <Box

                        margin="dense"
                        sx={{
                            color: 'black',
                            width: "fit-content",
                            background: "none"
                        }}>
                        <Button disabled
                            sx={{ color: "black" }}>
                            <AddShoppingCartIcon sx={{ color: "black" }} />
                            cart   <span className='cartCount'>0</span>
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;