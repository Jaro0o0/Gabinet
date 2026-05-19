import { Box, Typography, Container, Paper } from "@mui/material";
import './ServicesMain.css'
import { motion } from "framer-motion";


import Img_one from '../../../assets/imgs/services/one.jpg'
import Img_two from '../../../assets/imgs/services/two.jpg'
import Img_three from '../../../assets/imgs/services/three.jpg'
import Img_four from '../../../assets/imgs/services/indvidual.jpg'

import Img_krio from '../../../assets/imgs/IMG_2171.jpeg'
import Img_Elec from '../../../assets/imgs/IMG_2067.jpeg'
import Img_sol from '../../../assets/imgs/image00002.jpeg'
import Img_las from '../../../assets/imgs/IMG_2059.jpeg' 
import Img_dre from '../../../assets/imgs/IMG_2077.jpeg'
import Img_exe from '../../../assets/imgs/IMG_2085.jpeg'
import Img_mag from '../../../assets/imgs/IMG_2072.jpeg'
import Img_vol from '../../../assets/imgs/services/volume.jpeg'
import Img_L from '../../../assets/imgs/services/laser.jpeg'

function ServicesMain() {
    const items = [
        {
            title: 'Masaż częściowy kręgosłupa',
            price: '70zł',
            img: Img_one,
            description: 'Skupiony na wybranym odcinku kręgosłupa, niweluje napięcia i ból.'
        },
        {
            title: 'Masaż całościowy kręgosłupa',
            price: '100zł',
            img: Img_one,
            description: 'Kompleksowy masaż wszystkich odcinków kręgosłupa dla pełnej regeneracji.'
        },
        {
            title: 'Masaż kończyn – 1 okolica',
            price: '70zł',
            img: Img_two,
            description: 'Relaksuje i usprawnia krążenie w wybranej kończynie.'
        },
        {
            title: 'Masaż limfatyczny ręczny',
            price: '80zł',
            img: Img_three,
            description: 'Pobudza krążenie limfy, redukuje obrzęki i wspomaga detoksykację.'
        },
        {
            title: 'Laser',
            price: '15zł',
            img: Img_L,
            description: 'Zastosowanie wiązki laserowej w celu przyspieszenia gojenia i redukcji stanu zapalnego.'
        },
        {
            title: 'Ultradźwięki',
            price: '15zł',
            img: Img_vol,
            description: 'Fala akustyczna docierająca do głębokich tkanek, działająca przeciwbólowo.'
        },
        {
            title: 'Sollux',
            price: '15zł',
            img: Img_sol,
            description: 'Naświetlanie promieniowaniem podczerwonym, które rozgrzewa i poprawia ukrwienie.'
        },
        {
            title: 'Pole magnetyczne',
            price: '15zł',
            img:  Img_mag,
            description: 'Stymuluje regenerację tkanek i kości za pomocą pola o niskiej częstotliwości.'
        },
        {
            title: 'Elektroterapia',
            price: '15zł',
            img: Img_Elec,
            description: 'Leczenie prądami o różnej częstotliwości w celu uśmierzenia bólu i stymulacji mięśni.'
        },
        {
            title: 'Krioterapia',
            price: '25zł',
            img: Img_krio ,
            description: 'Leczenie zimnem, które zmniejsza obrzęki, ból i przyspiesza regenerację.'
        },
        {
            title: 'Ćwiczenia w odciążeniu',
            price: '15zł',
            img: Img_exe,
            description: 'Ćwiczenia wykonywane w specjalnym systemie podwieszek, nieobciążające stawów.'
        },
        {
            title: 'Terapia indywidualna',
            price: '60zł',
            img: Img_four,
            description: 'Personalizowana praca z terapeutą dopasowana do specyficznych potrzeb pacjenta.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 30 min',
            price: '50zł',
            img: Img_dre,
            description: 'Sekwencyjny masaż uciskowy wspomagający układ limfatyczny.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 40 min',
            price: '70zł',
            img: Img_dre,
            description: 'Wydłużona sesja drenażu mechanicznego dla lepszych efektów terapeutycznych.'
        },
        {
            title: 'Drenaż limfatyczny mechaniczny – 60 min',
            price: '80zł',
            img: Img_dre,
            description: 'Pełna sesja drenażu mechanicznego zapewniająca maksymalne odprężenie i drenaż.'
        },
    ];

    return (
        <Container>
            <Box className='cards' sx={{
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr',
                    md: '1fr 1fr 1fr'
                }
            }}>
                {items.map((card, index) => (
                    <Paper className='card' component={motion.div}
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.02 }}
                        viewport={{ once: true }}
                        elevation={5}
                        key={index}
                    >
                        <Box className='services-card-img-box'>
                            <img src={card.img} className='services-card-img' alt={card.title} />
                        </Box>
                        <Box className='services-card-text-box'>
                            <Typography variant="h4" gutterBottom>{card.title}</Typography>
                            <Typography variant="p">{card.description}</Typography>
                        </Box>
                        <Typography variant="p">Cena: {card.price}</Typography>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
}

export default ServicesMain;
