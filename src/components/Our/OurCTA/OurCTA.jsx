import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../../animations";
import { Link } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './OurCTA.css';

function OurCTA() {
    return (
        <Box className="our-cta-wrapper">
            <Container>
                <Box 
                    component={motion.div}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="our-cta-inner"
                >
                    <Typography variant="h2" sx={{ color: 'white', mb: 2, fontWeight: 800 }}>
                        Gotowy na powrót do pełnej sprawności?
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', mb: 5, fontWeight: 300 }}>
                        Skontaktuj się z nami i umów się na pierwszą wizytę. Nasz zespół pomoże Ci dobrać odpowiednią terapię.
                    </Typography>
                    <Button 
                        component={Link}
                        to="/contact"
                        variant="contained" 
                        color="secondary" 
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ px: 6, py: 2, fontSize: '1.1rem' }}
                    >
                        Umów się teraz
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default OurCTA;
