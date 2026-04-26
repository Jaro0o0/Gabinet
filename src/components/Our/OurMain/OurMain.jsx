import { Container, Typography, Grid, Box, Button } from "@mui/material";
import OurImg from '../../../assets/outside.jpg'
import './OurMain.css'
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from '../../../animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router";

function OurMain() {
    return ( 
        <Container sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box 
                        component={motion.div}
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="our-main-img-wrapper"
                    >
                        <Box className="our-main-img-decoration" />
                        <img src={OurImg} className="our-main-img" alt="Nasze wnętrze"/>
                    </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <Box 
                        component={motion.div}
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        <Typography 
                            variant="overline" 
                            color="secondary" 
                            sx={{ fontWeight: 800, letterSpacing: 2, mb: 1, display: 'block' }}
                        >
                            Nowoczesna Fizjoterapia
                        </Typography>
                        <Typography 
                            variant="h2" 
                            gutterBottom 
                            sx={{ fontWeight: 800, color: 'primary.main', mb: 3 }}
                        >
                            Dlaczego Kormedic?
                        </Typography>
                        
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                            Kormedic to coś więcej niż tylko gabinet. To miejsce stworzone z myślą o Twoim zdrowiu i komforcie. Nasza przestrzeń została zaprojektowana tak, aby sprzyjać regeneracji, a nowoczesne wyposażenie pozwala nam stosować najskuteczniejsze metody terapeutyczne.
                        </Typography>
                        
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                            Wierzymy, że kluczem do sukcesu jest połączenie precyzyjnej diagnozy, indywidualnie dobranej terapii oraz edukacji pacjenta. Nasza wiedza i doświadczenie są do Twojej dyspozycji na każdym etapie powrotu do sprawności.
                        </Typography>

                        <Button 
                            component={Link}
                            to="/contact"
                            variant="contained" 
                            color="secondary" 
                            endIcon={<ArrowForwardIcon />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Umów wizytę
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}

export default OurMain;
