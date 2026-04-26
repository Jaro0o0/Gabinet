import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../../animations";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import './OurStats.css';

const stats = [
    { icon: <AccessTimeOutlinedIcon />, value: "10+", label: "Lat Doświadczenia" },
    { icon: <GroupsOutlinedIcon />, value: "5000+", label: "Zadowolonych Pacjentów" },
    { icon: <HealthAndSafetyOutlinedIcon />, value: "15+", label: "Ukończonych Kursów" },
    { icon: <EmojiEventsOutlinedIcon />, value: "100%", label: "Zaangażowania" }
];

function OurStats() {
    return (
        <Box className="our-stats-wrapper">
            <Container>
                <Grid container spacing={4}>
                    {stats.map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Box 
                                component={motion.div}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                custom={index}
                                className="stat-item"
                            >
                                <Box className="stat-icon">{stat.icon}</Box>
                                <Typography variant="h3" className="stat-value">
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" className="stat-label">
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OurStats;
