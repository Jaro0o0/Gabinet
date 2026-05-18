import { Box,Typography,Button,Container, Paper} from "@mui/material";
import ServiceImg from '../../../assets/careers.jpg'
import './ServicesMain.css'
import { motion } from "framer-motion";
import { img, title } from "framer-motion/client";


function ServicesMain() {

    const items = [
        {
        title:'Masaż częściowy kręgosłupa',
        price: '70zł',
        img: ServiceImg, 
        description: 'Masaż'

    },
    {
        title:'Masaż całościowy kręgosłupa',
        price: '100zł',
        img: ServiceImg, 
    },
    {
        title:'Masaż kończyn – 1 okolica',
        price: '70zł',
        img: ServiceImg, 
    },
    {
        title:'Masaż limfatyczny ręczny',
        price: '80zł',
        img: ServiceImg, 
    },
    {
        title:'Laser',
        price: '15zł',
        img: ServiceImg, 
    },
    {
        title:'Ultradźwięki',
        price: '15zł',
        img: ServiceImg, 
    },
     {
        title:'Sollux',
        price: '15zł',
        img: ServiceImg, 
    },
    {
        title:'Pole magnetyczne',
        price: '15zł',
        img: ServiceImg, 
    },
    {
        title:'Elektroterapia',
        price: '15zł',
        img: ServiceImg, 
    },
    {
        title:'Krioterapia',
        price: '25zł',
        img: ServiceImg, 
    },
    {
        title:'Ćwiczenia w odciążeniu',
        price: '15zł',
        img: ServiceImg, 
    },
    {
        title:'Terapia indywidualna',
        price: '60zł',
        img: ServiceImg, 
    },
    {
        title:'Drenaż limfatyczny mechaniczny – 30 min',
        price: '50zł',
        img: ServiceImg, 
    },
    {
        title:'Drenaż limfatyczny mechaniczny – 40 min',
        price: '70zł',
        img: ServiceImg, 
    },
    {
        title:'Drenaż limfatyczny mechaniczny – 60 min',
        price: '80zł',
        img: ServiceImg, 
    },


]

    return (
        <Container>
               {/* CARDS */}
            <Box className='cards' sx={{gridTemplateColumns:{
                xs: '1fr',
                sm: '1fr',
                md: '1fr 1fr 1fr'

            }}}>
                {/* card-1 */}
                {/* <Paper className='card' component={motion.div}  
                initial={{y: 50}} 
                whileInView={{ y: 0}}
                transition={{duration: 0.5, delay: 0.02}}
                viewport={{ once: true}} 
                elevation={5}
                >
                    <Box className='services-card-img-box'>
                               <img src={ServiceImg } className='services-card-img'/>
                    </Box>
                    <Box className='services-card-text-box'>
                        <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                        <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                        
                    </Box>
                    <Typography variant="p">Cena: 220</Typography>
                </Paper> */}

                {items.map((card,index)=> {
                    return(
                        
                        <Paper className='card' component={motion.div}  
                        initial={{y: 50}} 
                        whileInView={{ y: 0}}
                        transition={{duration: 0.5, delay: 0.02}}
                        viewport={{ once: true}} 
                        elevation={5}
                        key={index}
                        >
                            <Box className='services-card-img-box'>
                                    <img src={ServiceImg } className='services-card-img'/>
                            </Box>
                            <Box className='services-card-text-box'>
                                <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                                <Typography variant="p">{card.description}</Typography>
                                
                            </Box>
                            <Typography variant="p">{card.price}</Typography>
                        </Paper>
                        
                    )
                })}

                {/* {CardTravelSharp.map((item,index)=>{
                    return(
                         
                        <Paper className='card' component={motion.div}  
                        initial={{y: 50}} 
                        whileInView={{ y: 0}}
                        transition={{duration: 0.5, delay: 0.02}}
                        viewport={{ once: true}} 
                        elevation={5}
                        key={index}
                        >
                            <Box className='services-card-img-box'>
                                    <img src={ServiceImg } className='services-card-img'/>
                            </Box>
                            <Box className='services-card-text-box'>
                                <Typography variant="h4" gutterBottom='true'>Terapia manualna</Typography>
                                <Typography variant="p">Skuteczna metoda leczenia bólu kręgosłupa i stawów. Przywraca prawidłową ruchomość i zmniejsza napięcie mięśniowe.</Typography>
                                
                            </Box>
                            <Typography variant="p">Cena: 220</Typography>
                        </Paper>

                    )
                })} */}

               
           
              

            </Box>
        </Container>
      );
}

export default ServicesMain;