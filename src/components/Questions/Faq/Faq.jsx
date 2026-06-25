import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';
import './Faq.css';

function Faq() {
    const questions = [
        {
            question: 'Jak przygotować się do pierwszej wizyty?',
            answer: 'Na pierwszą wizytę prosimy zabrać ze sobą dokumentację medyczną (jeśli ją posiadasz, np. opisy badań obrazowych), wygodny strój sportowy niekrępujący ruchów oraz obuwie na zmianę.'
        },
        {
            question: 'Czy wymagane jest skierowanie od lekarza?',
            answer: 'Nie, skierowanie nie jest wymagane. Nasi wykwalifikowani fizjoterapeuci przeprowadzą na początku pierwszej wizyty szczegółowy wywiad i badanie funkcjonalne, aby dobrać odpowiednią terapię.'
        },
        {
            question: 'Ile trwa jedna sesja terapeutyczna?',
            answer: 'Standardowa sesja trwa zazwyczaj od 30 do 60 minut, w zależności od rodzaju zabiegu oraz indywidualnych potrzeb pacjenta określonych podczas konsultacji.'
        },
        {
            question: 'Jak ubrać się na zabieg lub ćwiczenia?',
            answer: 'Najlepiej sprawdzi się luźny strój sportowy (koszulka, legginsy lub spodenki). Ważne jest, aby terapeuta miał swobodny dostęp do okolicy ciała poddawanej zabiegowi.'
        },
        {
            question: 'Jakie są przeciwwskazania do masażu lub zabiegów?',
            answer: 'Głównymi przeciwwskazaniami są: gorączka, ostre stany zapalne, choroby zakaźne, nieuregulowane nadciśnienie oraz niektóre choroby nowotworowe. O wszelkich dolegliwościach należy poinformować terapeutę przed rozpoczęciem zabiegu.'
        },
        {
            question: 'Czy po zabiegu mogą wystąpić reakcje bólowe?',
            answer: 'Tak, po niektórych terapiach manualnych lub intensywnych masażach może wystąpić tzw. ból pozabiegowy (podobnie jak "zakwasy"), który zazwyczaj mija w ciągu 24-48 godzin.'
        }
    ];

    return (
        <Box className="faq-wrapper">
            <Container>
                <Typography variant="h3" align="center" gutterBottom className="faq-title">
                    Często zadawane pytania
                </Typography>
                {questions.map((item, index) => (
                    <Accordion key={index} className="faq-accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography className="faq-question">
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}

export default Faq;
