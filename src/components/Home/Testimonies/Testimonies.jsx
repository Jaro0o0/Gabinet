import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Container, Typography, Paper, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { fadeInUp, viewportConfig } from '../../../animations';
import './Testimonies.css';

const testimonials = [
    {
        name: "Karolina Buch",
        text: "Polecam ❤️",
        rating: 5
    },
    {
        name: "Janina Po",
        text: "Serdecznie polecam zabiegi w Kormedic - sprawnie , fachowo i rzetelnie",
        rating: 5
    },
    {
        name: "Barbara Marek-Zborowska",
        text: "Profesjonalne podejście Zespołu i bardzo sympatyczna atmosfera, jak najbardziej polecam",
        rating: 5
    },
    {
        name: "Małgorzata S.",
        text: "Z pełnym przekonaniem polecam ten gabinet każdej osobie, która szuka fachowej pomocy i realnych efektów.",
        rating: 5
    }
];

function Testimonies() {
    return (
        <Box sx={{ py: 12, backgroundColor: 'background.alt', overflow: 'hidden' }}>
            <Container sx={{ mb: 6 }}>
                <Box
                    component={motion.div}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    sx={{ textAlign: 'center' }}
                >
                    <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                        Opinie Pacjentów
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Co o nas mówią
                    </Typography>
                </Box>
            </Container>

            <Box
                component={motion.div}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <Container>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="testimonies-swiper"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        backgroundColor: 'background.default',
                                        border: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    <FormatQuoteIcon 
                                        sx={{ 
                                            position: 'absolute', 
                                            top: 20, 
                                            right: 20, 
                                            fontSize: 40, 
                                            color: 'secondary.light', 
                                            opacity: 0.2 
                                        }} 
                                    />
                                    <Rating value={t.rating} readOnly size="small" sx={{ mb: 2, color: 'secondary.main' }} />
                                    <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', flexGrow: 1, color: 'text.secondary' }}>
                                        "{t.text}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{ bgcolor: 'secondary.main', fontWeight: 700 }}>
                                            {t.name.charAt(0)}
                                        </Avatar>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                            {t.name}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Box>
        </Box>
    );
}

export default Testimonies;