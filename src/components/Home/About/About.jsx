import { Container, Typography, Box, Button } from "@mui/material";
import IMG from '../../../assets/outside.jpg'
import './About.css'
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from '../../../animations';
import { Link } from 'react-router';

function About() {
    return (
        <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: 'background.paper', overflow: 'hidden' }}>
            <Container>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr 1fr'
                        },
                        gap: { xs: 8, md: 12 },
                        alignItems: 'center'
                    }}
                >
                    {/* Kolumna ze zdjęciem */}
                    <Box
                        component={motion.div}
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        sx={{ position: 'relative' }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img 
                                src={IMG} 
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                alt="Gabinet Kormedic" 
                            />
                        </Box>
                        <Box 
                            sx={{
                                position: 'absolute',
                                top: -20,
                                left: -20,
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'secondary.light',
                                borderRadius: '24px',
                                opacity: 0.2,
                                zIndex: 1
                            }}
                        />
                        <Box 
                            sx={{
                                position: 'absolute',
                                bottom: -30,
                                right: -30,
                                width: '200px',
                                height: '200px',
                                border: '4px solid',
                                borderColor: 'secondary.main',
                                borderRadius: '24px',
                                opacity: 0.1,
                                zIndex: 1
                            }}
                        />
                    </Box>

                    {/* Kolumna z tekstem */}
                    <Box
                        component={motion.div}
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        <Typography 
                            variant="overline" 
                            sx={{ 
                                fontWeight: 800, 
                                letterSpacing: 3, 
                                mb: 2, 
                                display: 'block',
                                color: 'secondary.main'
                            }}
                        >
                            O NAS
                        </Typography>

                        <Typography 
                            variant="h2" 
                            gutterBottom 
                            sx={{ 
                                fontWeight: 800,
                                mb: 3,
                                color: 'primary.main'
                            }}
                        >
                            Kormedic <br/>
                            <Typography component="span" variant="h3" color="secondary" sx={{ fontSize: '0.7em' }}>
                                Twoje zdrowie w dobrych rękach
                            </Typography>
                        </Typography>

                        <Typography 
                            variant="body1" 
                            sx={{ 
                                mb: 5, 
                                color: "text.secondary",
                               
                            }}
                        >
                           Gabinet fizjoterapeutyczny Kormedic to nowoczesne i przyjazne miejsce, w którym pacjenci mogą skorzystać z kompleksowej opieki fizjoterapeutycznej zarówno prywatnie, jak i w ramach kontraktu z NFZ. Wyposażony w specjalistyczny sprzęt do terapii manualnej, ćwiczeń rehabilitacyjnych oraz masażu, zapewnia komfort i bezpieczeństwo podczas każdej wizyty. Jasne i przestronne wnętrze sprzyja relaksowi, a indywidualne podejście do każdego pacjenta pozwala na skuteczną rekonwalescencję i powrót do pełnej sprawności.
                        </Typography>

                        <Box>
                            <Button 
                                component={Link}
                                to="/oferta"
                                variant="contained" 
                                color="primary"
                                size="large"
                                sx={{ px: 5 }}
                            >
                                Poznaj naszą ofertę
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default About;
