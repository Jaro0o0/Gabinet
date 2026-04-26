import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../../animations";
import './OurValues.css';

const values = [
    {
        icon: <SecurityOutlinedIcon fontSize="large" />,
        title: "Profesjonalizm",
        description: "Stosujemy tylko sprawdzone i bezpieczne metody terapeutyczne, oparte na aktualnej wiedzy medycznej."
    },
    {
        icon: <AutoGraphOutlinedIcon fontSize="large" />,
        title: "Rozwój",
        description: "Stale podnosimy nasze kwalifikacje, uczestnicząc w licznych szkoleniach i kursach specjalistycznych."
    },
    {
        icon: <FavoriteBorderOutlinedIcon fontSize="large" />,
        title: "Empatia",
        description: "Podchodzimy do każdego pacjenta indywidualnie, dbając o komfortową i przyjazną atmosferę."
    },
    {
        icon: <EmojiObjectsOutlinedIcon fontSize="large" />,
        title: "Skuteczność",
        description: "Naszym celem jest trwałe rozwiązanie problemów zdrowotnych, a nie tylko chwilowe uśmierzenie bólu."
    }
];

function OurValues() {
    return (
        <Box sx={{ py: 10, backgroundColor: 'background.alt' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="overline" 
                        color="secondary" 
                        sx={{ fontWeight: 800, letterSpacing: 2 }}
                    >
                        Fundamenty Naszej Pracy
                    </Typography>
                    <Typography 
                        variant="h2" 
                        sx={{ fontWeight: 800, mt: 1 }}
                    >
                        Nasze Wartości
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                component={motion.div}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                custom={index}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    backgroundColor: 'white'
                                }}
                            >
                                <Box className="value-icon-wrapper">
                                    {value.icon}
                                </Box>
                                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, fontSize: '1.25rem' }}>
                                    {value.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                                    {value.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OurValues;
