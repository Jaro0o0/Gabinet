import ContactHeroImg from '../../../assets/outside.jpg'
import './ContactHero.css'
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function ContactHero() {
    return (
        <Box className='contact-hero-content' sx={{ position: 'relative' }}>
            <Box
                component="img"
                className='contact-hero-img'
                src={ContactHeroImg}
                sx={{
                    width: '100%',
                    height: { xs: '40vh', sm: '70vh' },
                    objectFit: 'cover',
                    objectPosition: 'top'
                }}
            />
            <Box
                className='contact-hero-inner'
                sx={{
                    position: 'absolute',
                    left: '50%',
                    bottom: { xs: '20%', sm: '10%' },
                    transform: 'translate(-50%, -10%)',
                    textAlign: 'center'
                }}
            >
                <Typography
                    component={motion.h1}
                    variant="h2"
                    color="white"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Kontakt
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactHero;
