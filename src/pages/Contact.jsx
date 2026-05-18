import Why from "../components/Contact/Why/Why";
import ContactHero from "../components/Contact/ContactHero/ContactHero";
import Section from "../components/Common/Section/Section";
import { Box } from "@mui/material";

function contact() {
    return (  
        <>
         <ContactHero/>
         <Section>
            <Why/>
         </Section>
         
            <Box sx={{paddingTop: { xs: '60px', md: '120px' }}}>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.0315264004307!2d21.417081712151234!3d50.04824071612332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d098862c37e59%3A0x67cbaf0a03ecc57e!2sKormedic!5e0!3m2!1spl!2spl!4v1771023839239!5m2!1spl!2spl" 
                 width="100%" height="450"  
                 allowFullScreen loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
         
        
       
        </>
    );
}

export default contact;
