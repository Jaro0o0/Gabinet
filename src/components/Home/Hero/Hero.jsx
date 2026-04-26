import Video from '../../../assets/video2.mp4'
import './Hero.css'
import { Box, Typography, Button, Container, ButtonGroup, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer } from '../../../animations';

function Hero() {
    return (
        <Box sx={{ backgroundColor: 'black', width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* VIDEO_WRAPPER */}
            <Box
                className='video-wrapper'
                component={motion.div}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
            >
                <video src={Video} autoPlay muted loop playsInline></video>
            </Box>

            <Box className='hero-inner'>
                <Container>
                    <Box
                        component={motion.div}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        sx={{ maxWidth: '800px' }}
                    >
                        <Typography
                            variant='h2'
                            gutterBottom
                            color='white'
                            component={motion.h2}
                            variants={fadeInUp}
                            sx={{ 
                                fontWeight: '700', 
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                mb: 3
                            }}
                        >
                            Skuteczna rehabilitacja, nowoczesne metody terapii bólu oraz urazów.
                        </Typography>

                        <Typography
                            variant='h4'
                            gutterBottom
                            color='white'
                            component={motion.h4}
                            variants={fadeInUp}
                            sx={{ 
                                fontWeight: '300', 
                                opacity: 0.9, 
                                mb: 5,
                                fontSize: { xs: '1.25rem', md: '1.75rem' }
                            }}
                        >
                            Twoje zdrowie w dobrych rękach
                        </Typography>

                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={2} 
                            component={motion.div} 
                            variants={fadeInUp}
                        >
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                size='large' 
                                sx={{ px: 6, py: 2 }}
                            >
                                OFERTA
                            </Button>
                            <Button 
                                variant="outlined" 
                                size='large' 
                                sx={{ 
                                    px: 6, 
                                    py: 2, 
                                    color: 'white', 
                                    borderColor: 'white',
                                    '&:hover': {
                                        borderColor: 'secondary.light',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                KONTAKT
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Hero;