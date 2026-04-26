import { Link } from "react-router";
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Drawer, List, ListItem, ListItemText, Stack } from "@mui/material";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Oferta', path: '/oferta' },
    { label: 'O nas', path: '/o-nas' },
    { label: 'Galeria', path: '/galeria' },
    { label: 'Faq', path: '/faq' },
];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [headerScroll, setHeaderScroll] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setHeaderScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                elevation={headerScroll ? 2 : 0}
                sx={{
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: headerScroll ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    backdropFilter: headerScroll ? 'blur(10px)' : 'none',
                    color: headerScroll ? 'text.primary' : 'white',
                    py: headerScroll ? 0.5 : 1.5,
                    border: 'none',
                    borderRadius: 0,

                }}
            >
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h4"
                            component={Link}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 800,
                                color: 'inherit',
                                textDecoration: 'none',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Kormedic
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                    sx={{
                                        px: 2,
                                        fontWeight: 600,
                                        opacity: 0.9,
                                        '&:hover': { opacity: 1, backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'secondary.main' }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                variant={headerScroll ? "contained" : "outlined"}
                                color={headerScroll ? "primary" : "inherit"}
                                component={Link}
                                to='/contact'
                                sx={{
                                    ml: 2,
                                    px: 4,
                                    borderColor: headerScroll ? 'primary.main' : 'rgba(255,255,255,0.5)',
                                    '&:hover': {
                                        borderColor: 'white',
                                        backgroundColor: headerScroll ? 'primary.dark' : 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                Kontakt
                            </Button>
                        </Stack>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: { width: 280, p: 3 }
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, color: 'primary.main' }}>
                    Kormedic
                </Typography>
                <List>
                    {navItems.map((item) => (
                        <ListItem 
                            key={item.label} 
                            disablePadding 
                            sx={{ mb: 1 }}
                        >
                            <Button
                                component={Link}
                                to={item.path}
                                fullWidth
                                onClick={handleDrawerToggle}
                                sx={{ 
                                    justifyContent: 'flex-start', 
                                    color: 'text.primary',
                                    py: 1.5,
                                    px: 2,
                                    borderRadius: 2
                                }}
                            >
                                {item.label}
                            </Button>
                        </ListItem>
                    ))}
                    <ListItem disablePadding sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            component={Link}
                            to='/contact'
                            onClick={handleDrawerToggle}
                            sx={{ py: 1.5 }}
                        >
                            Kontakt
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default Header;

{/* <Container sx={{display: "flex",justifyContent: "space-between", backgroundColor: 'rgba(128, 128, 128, 0.5)',borderRadius: 4, padding:1, backdropFilter: "blur(5px)",}}></Container> */}