import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import './OurSecond.css'
import HistoryImg from '../../../assets/outside.jpg'
import TeamImg from '../../../assets/careers.jpg'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from '../../../animations';

const teamFeatures = [
    "Dyplomowani fizjoterapeuci",
    "Terapeuci manualni i osteopaci",
    "Specjaliści rehabilitacji sportowej"
];

function OurSecond() {
    return ( 
        <Container sx={{ py: 8 }}>
            <Grid container spacing={10}>
                {/* Nasza Historia */}
                <Grid item xs={12}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box 
                                component={motion.div}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <Box sx={{ p: 1.5, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', display: 'flex' }}>
                                        <AccessTimeOutlinedIcon color="secondary" />
                                    </Box>
                                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main' }}>
                                        Nasza Historia
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                                    Nasza klinika powstała z pasji i chęci tworzenia usług na najwyższym poziomie. Od początku stawiamy na jakość, rozwój i zaufanie naszych pacjentów. Każdy rok to nowe doświadczenia, które pozwalają nam stale podnosić standardy opieki fizjoterapeutycznej.
                                </Typography>
                                <Paper elevation={0} sx={{ p: 3, backgroundColor: 'background.paper', borderLeft: '4px solid', borderColor: 'secondary.main', borderRadius: '0 16px 16px 0' }}>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'primary.main', fontWeight: 600 }}>
                                        "Pomagamy wrócić do zdrowia od ponad 10 lat, łącząc pasję z profesjonalizmem."
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="our-second-img-container">
                                <img className="our-second-img" src={HistoryImg} alt="Nasza historia" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Nasz Zespół */}
                <Grid item xs={12}>
                    <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Box className="our-second-img-container">
                                <img className="our-second-img" src={TeamImg} alt="Nasz zespół" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box 
                                component={motion.div}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <Box sx={{ p: 1.5, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', display: 'flex' }}>
                                        <Diversity3OutlinedIcon color="secondary" />
                                    </Box>
                                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main' }}>
                                        Nasz Zespół
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                                    Nasz zespół to grupa zaangażowanych i doświadczonych specjalistów. Łączy nas wiedza i wspólny cel – dostarczanie najlepszych rozwiązań dla naszych pacjentów. Razem tworzymy miejsce, w którym profesjonalizm spotyka się z empatycznym podejściem i dobrą atmosferą.
                                </Typography>
                                
                                <Stack spacing={2}>
                                    {teamFeatures.map((feature, idx) => (
                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: '1.2rem' }} />
                                            <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
     );
}

export default OurSecond;
