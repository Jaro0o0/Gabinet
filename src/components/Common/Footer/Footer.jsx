import { Box, Container, Typography, Grid, Link as MuiLink, Stack, IconButton, Button } from "@mui/material";
import { Link } from "react-router";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
    return ( 
        <Box sx={{ 
            backgroundColor: 'primary.main', 
            color: 'white', 
            pt: 10, 
            pb: 4,
            borderTop: '1px solid',
            borderColor: 'rgba(255,255,255,0.1)'
        }}>
            <Container>
                <Grid container spacing={6} sx={{ mb: 8 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
                            Kormedic
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: '350px' }}>
                            Pomagamy naszym pacjentom pokonać ból i ograniczenia ruchowe, oferując skuteczną rehabilitację, nowoczesne terapie i wsparcie na każdym etapie powrotu do zdrowia.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            Nawigacja
                        </Typography>
                        <Stack spacing={2}>
                            {['Home', 'Oferta', 'O nas', 'Galeria', 'Faq'].map((item) => (
                                <MuiLink 
                                    key={item}
                                    component={Link} 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    sx={{ 
                                        color: 'rgba(255,255,255,0.7)', 
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { color: 'secondary.main' }
                                    }}
                                >
                                    {item}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            Nasze Usługi
                        </Typography>
                        <Stack spacing={2}>
                            {['Masaż częściowy kręgosłupa','Masaż całościowy kręgosłupa','Masaż kończyn – 1 okolica','Masaż limfatyczny ręczny','Laser','Ultradźwięki','Sollux','Elektroterapia', ].map((item) => (
                                <Typography key={item} variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    {item}
                                </Typography>
                                
                            ))}
                            <MuiLink 
                                component={Link} 
                                to="/oferta"
                               
                                sx={{ 
                                    color: 'secondary.main', 
                                    textDecoration: 'none',
                                    fontWeight: 500,

                                    pt: 1,
                                    '&:hover': { color: 'white' }
                                }}
                            >
                                Wszystkie usługi →
                            </MuiLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            Kontakt
                        </Typography>
                        <Stack spacing={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.5 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                     Wielopolska 62<br />
                                     39-200 Dębica
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon sx={{ color: 'secondary.main' }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    14 681 33 21
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <EmailIcon sx={{ color: 'secondary.main' }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    kormedickontakt@gmail.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Box sx={{ 
                    pt: 4, 
                    borderTop: '1px solid', 
                    borderColor: 'rgba(255,255,255,0.1)',
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        © {new Date().getFullYear()} Kormedic. Wszelkie prawa zastrzeżone.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
