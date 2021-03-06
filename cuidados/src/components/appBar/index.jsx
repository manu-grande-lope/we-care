import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useTranslation } from "react-i18next";
import {URL} from '../constantes/globales.js' 

const pages = ['menu.services', 'menu.pricing', 'menu.about-us'];
const pathPages = ['/services', '/pricing', '/aboutUs']
const settings = ['menu-settings.login', 'menu-settings.register', 'menu-settings.account', 'menu-settings.logout'];
const pathSettings = ['/login', '/register', '/account', '/logout'];

const ResponsiveAppBar = () => {
    const [i] = useTranslation("global");
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null); 
    };


    const handleLogout = (i) =>{
        if (i === 3){
            sessionStorage.removeItem('token');
        }
    } 
    return (
        <AppBar position="static" color={'primary'} elevation={2}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="white"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    ><Link to="/">WE CARE</Link>
                        <VolunteerActivismIcon color="logo" sx={{ ml: "15px" }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="logo"
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
                            {pages.map((page, indx) => (
                                <MenuItem key={page} index={indx} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link className='collapsed__link__style' to={pathPages[indx]} >{i(page)}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        color="white"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Link to="/">WE CARE</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, indx) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link to={pathPages[indx]} >{i(page)}</Link>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`${URL}/public/images/user2.png`}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            {settings.map((setting, indx) => (
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button to={pathSettings[indx]}
                                        variant="text"
                                        onClick={()=>handleLogout(indx)}
                                        >
                                        <Link className='collapsed__link__style' to={pathSettings[indx]} >{i(setting)}</Link></Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

