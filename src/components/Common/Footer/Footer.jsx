import { Box, Container, Typography, Grid, Link as MuiLink, Stack, IconButton } from "@mui/material";
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
                        <Stack direction="row" spacing={2}>
                            <IconButton sx={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', '&:hover': { backgroundColor: 'secondary.main' } }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', '&:hover': { backgroundColor: 'secondary.main' } }}>
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
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
                            {['Terapia manualna', 'Osteopatia', 'Masaż leczniczy', 'Rehabilitacja', 'Kinesiotaping'].map((item) => (
                                <Typography key={item} variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    {item}
                                </Typography>
                            ))}
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
                                    ul. Przykładowa 12/3<br />
                                    00-000 Miasto
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon sx={{ color: 'secondary.main' }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    +48 123 456 789
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <EmailIcon sx={{ color: 'secondary.main' }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                    kontakt@kormedic.pl
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