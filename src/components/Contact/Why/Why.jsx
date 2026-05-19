import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import './Why.css'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Why() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const loadingToast = toast.loading('Wysyłanie wiadomości...');
        
        emailjs.send('service_0k4dy3d', 'template_uohgoor', data, '0ieLgYHaimhaTSLGo')
            .then(() => {
                toast.success('Wiadomość została wysłana pomyślnie!', { id: loadingToast });
                reset();
            })
            .catch(() => {
                toast.error('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.', { id: loadingToast });
            });
    }

    return (
        <Container sx={{ position: "relative" }}>
            <Typography component='p' color="primary" gutterBottom>FAQ</Typography>
            <Typography variant="h3" component='h1' gutterBottom>Skontaktuj się z nami</Typography>

            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
                gap: '3rem',
                mt: 4 
            }}>
                {/* Formularz */}
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="name"
                            sx={{ mt: 2, mb: 2 }}
                            label="Imię"
                            variant="outlined"
                            fullWidth
                            required
                            {...register('name', { required: true })}
                        />
                        <TextField
                            id="lastname"
                            sx={{ mt: 2, mb: 2 }}
                            label="Nazwisko"
                            variant="outlined"
                            fullWidth
                            required
                            {...register('lastname')}
                        />
                        <TextField
                            id="email"
                            sx={{ mt: 2, mb: 2 }}
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register('email',
                              {required: "Email jest wymagany",
                                  pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                      message: "Nieprawidłowy email"
                                    }
                              }
                            )}
                        />
                        <TextField
                            id="message"
                            sx={{ mt: 2, mb: 2 }}
                            label="Wiadomość"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            {...register('message')}
                        />
                        <Button variant="contained" size="large" type="submit">Wyślij</Button>
                    </form>
                </Box>

                {/* Dane kontaktowe */}
                <Box>
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                        gap: '2rem',
                        mt: { xs: 0, md: 2 }
                    }}>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Adres</Typography>
                            <Typography variant="body1" color="#444">Wielopolska 62, 39-200 Dębica</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Godziny otwarcia</Typography>
                            <Typography variant="body1" color="#444">Poniedziałek - Piątek 8:00 - 16:00</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Kontakt</Typography>
                            <Typography variant="body1" color="#444">Tel: +48 123 456 789</Typography>
                            <Typography variant="body1" color="#444">E-mail: kormedickontakt@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom className="second-grid-header">Social Media</Typography>
                            <Typography variant="body1" color="#444">Facebook</Typography>
                            <Typography variant="body1" color="#444">Instagram</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Why;
