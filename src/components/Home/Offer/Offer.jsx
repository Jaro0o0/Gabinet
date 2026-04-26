import { Container, Typography, Box, Paper } from "@mui/material";
import './Offer.css' 
import { motion } from "framer-motion";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import { fadeInUp, staggerContainer, viewportConfig } from '../../../animations';

const features = [
    {
        icon: <SecurityOutlinedIcon fontSize="large" color="secondary" />,
        title: "Doświadczenie",
        description: "Nasz zespół tworzą wykwalifikowani fizjoterapeuci z wieloletnim doświadczeniem klinicznym."
    },
    {
        icon: <VerifiedUserOutlinedIcon fontSize="large" color="secondary" />,
        title: "Certyfikacja",
        description: "Stosujemy tylko sprawdzone, certyfikowane metody terapii manualnej i osteopatii."
    },
    {
        icon: <SpeedOutlinedIcon fontSize="large" color="secondary" />,
        title: "Szybkie efekty",
        description: "Skupiamy się na dotarciu do źródła problemu, co pozwala na szybszy powrót do pełnej sprawności."
    }
];

function Offer() {
    return ( 
        <Box sx={{ py: 12, backgroundColor: 'background.default' }}>
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
                        Dlaczego my
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Standard Kormedic
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
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            variants={fadeInUp}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    textAlign: 'center',
                                    backgroundColor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)'
                                    }
                                }}
                            >
                                <Box sx={{ 
                                    mb: 3, 
                                    display: 'inline-flex', 
                                    p: 2, 
                                    borderRadius: '20px', 
                                    backgroundColor: 'rgba(14, 165, 233, 0.1)' 
                                }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mb: 2 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Container>   
        </Box>
    );
}

export default Offer;
