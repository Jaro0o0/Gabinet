import { Container, Box, Typography, Paper, Button } from "@mui/material";
import './Services.css'
import ServiceImg from '../../../assets/careers.jpg'
import { motion } from "framer-motion";
import { Link } from "react-router";
import { fadeInUp, staggerContainer, hoverScale, viewportConfig } from '../../../animations';

const servicesData = [
    {
        title: "Terapia manualna",
        description: "Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.",
        price: "220 zł",
        img: ServiceImg
    },
    {
        title: "Osteopatia",
        description: "Holistyczne podejście do zdrowia, skupiające się na powiązaniach między strukturą a funkcją organizmu.",
        price: "250 zł",
        img: ServiceImg
    },
    {
        title: "Masaż leczniczy",
        description: "Intensywny masaż mający na celu złagodzenie bólu, poprawę krążenia i rozluźnienie spiętych tkanek.",
        price: "180 zł",
        img: ServiceImg
    }
];

function Services() {
    return (
        <Box sx={{ py: 12, backgroundColor: 'background.alt' }}>
            <Container>
                <Box
                    component={motion.div}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    sx={{ mb: 8, textAlign: 'center' }}
                >
                    <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                        Nasza Specjalizacja
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Profesjonalna Opieka
                    </Typography>
                </Box>

                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr'
                        },
                        gap: 4
                    }}
                >
                    {servicesData.map((service, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            variants={fadeInUp}
                            whileHover={hoverScale}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    p: 0,
                                    backgroundColor: 'background.default'
                                }}
                            >
                                <Box sx={{ height: 240, overflow: 'hidden' }}>
                                    <img 
                                        src={service.img} 
                                        alt={service.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                                <Box sx={{ p: 4, flexGrow: 1 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontSize: '1.5rem' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '4.5em' }}>
                                        {service.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                                            {service.price}
                                        </Typography>
                                        <Button 
                                            component={Link} 
                                            to="/oferta" 
                                            size="small" 
                                            color="secondary"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            WIĘCEJ
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    ))}
                </Box>

                <Box 
                    component={motion.div}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    sx={{ mt: 8, textAlign: 'center' }}
                >
                    <Button 
                        variant="contained" 
                        size="large" 
                        component={Link} 
                        to='/oferta'
                        sx={{ px: 6 }}
                    >
                        Zobacz pełną ofertę
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Services;