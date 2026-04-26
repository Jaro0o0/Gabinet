import { Container, Typography,Box, TextField,Button, makeStyles } from "@mui/material";
import Video from '../../../assets/video.mp4'
import WhyImg from '../../../assets/careers.jpg'
import { useForm } from "react-hook-form";
import './Why.css'



import emailjs from '@emailjs/browser';






function Why() {

  const  { register,
    handleSubmit,
    watch,
    formState: { errors },} = useForm()

    const onSubmit = (data) =>  {
        // EmailJS
      emailjs.send('service_en1xzkl', 'template_xp2ithp', data, '0ieLgYHaimhaTSLGo',
      ).then(
        () => {
          alert('Wysłana')
        }
      ).catch((error)=>{
        alert('bład')
      })
    }

  

    return (
        // <video className="why-video" src={Video}  autoPlay muted loop></video>
        <Container sx={{position:"relative"}} >
          <Typography component='p' color="primary" gutterBottom='true'>FAQ</Typography>
          <Typography variant="h3" component='h1' gutterBottom='true' >Skontaktój się z nami</Typography>
            <Box className='contact-grid'>
              <Box>
                {/* Odczytuje dane z fromalrza i je waliduje */}
                  <form onSubmit={handleSubmit(onSubmit)}>                                                                                                                                        Resjestruje daane do odczytu  i ustwi reguly walidacji                                  
                      <TextField id="outlined-basic" className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Imię" variant="outlined" color="primary"  fullWidth required {...register('name',{ required: true })}/>
                      <TextField id="outlined-basic"  className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Nazwisko" variant="outlined"  fullWidth required  {...register('lastname')}/>
                      <TextField id="outlined-basic"  className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="E-mail" variant="outlined"  fullWidth required  rows={4} {...register('email')} />
                      <TextField id="outlined-basic"  className="form-row" sx={{ mt: 2, mb: 2, display: 'block' }} label="Wiadomość" variant="outlined"  fullWidth required multiline rows={4} {...register('message')} />
                      <Button variant="contained" size="large" type="submit">Wyślij</Button>
                  </form>
                  </Box>
                <Box>
                    <Box className='contact-second-grid' sx={{mt: 2}}>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Adres</Typography>
                        <Typography variant="p" color="#444">Wielopolska 62, 39-200 Dębica</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Godziny otwarcia</Typography>
                        <Typography variant="p" color="#444">Poniedizalek piaąßek 8:00-12:00</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Kontakt</Typography>
                        <Typography variant="p" color="#444">Telefon</Typography>
                        <Typography variant="p" color="#444">E-mail</Typography>

                      </Box>
                      <Box>
                        <Typography variant="h4" gutterBottom='true' className="second-grid-header">Social Media</Typography>
                        <Typography variant="p" color="#444">E-mail</Typography>
                      </Box>
                    </Box>
                </Box>
         
            </Box>
           
        </Container>
      );
}

export default Why;
