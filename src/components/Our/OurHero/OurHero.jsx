import { Typography, Box, Container } from '@mui/material';
import OurHeaderImg from '../../../assets/outside.jpg'
import './OurHero.css'
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../../../animations';

function OurHero() {
    return ( 
        <Box className='our-hero-wrapper'>
            <Box
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className='our-hero-bg'
            >
                <img className='our-header-img' src={OurHeaderImg} alt="Kormedic background" />
                <Box className='our-hero-overlay' />
            </Box>
            
            <Container className='our-hero-container'>
                <Box className='our-hero-inner'>
                    <Typography 
                        component={motion.span}
                        variant="overline"
                        sx={{ 
                            color: 'secondary.light', 
                            fontWeight: 700, 
                            letterSpacing: 4,
                            mb: 2,
                            display: 'block'
                        }}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Poznaj Kormedic
                    </Typography>
                    <Typography 
                        component={motion.h1} 
                        variant="h1" 
                        color="white" 
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        sx={{ 
                            fontWeight: 800,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            fontSize: { xs: '3rem', md: '5rem' },
                            lineHeight: 1.1
                        }}
                    >
                        Pasja do Zdrowia,<br/>
                        <Box component="span" sx={{ color: 'secondary.main' }}>Misja Pomocy</Box>
                    </Typography>
                    <Typography 
                        component={motion.p}
                        variant="h5"
                        color="white"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        sx={{ 
                            opacity: 0.9, 
                            fontWeight: 300, 
                            mt: 3,
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Od ponad dekady wspieramy naszych pacjentów w powrocie do pełnej sprawności, łącząc nowoczesną technologię z holistycznym podejściem.
                    </Typography>
                </Box>
            </Container>

            <Box 
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            />
        </Box>
     );
}

export default OurHero;
