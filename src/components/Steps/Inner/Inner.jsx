import { motion } from "framer-motion";
import { Box,Typography } from "@mui/material";
import './Inner.css';
function Inner() {
    return (  
          <Box className='services-hero-inner'>
                <Typography component={motion.h1} variant="h2" color="white" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>OFERTA</Typography>
           </Box>
    );
}

export default Inner;