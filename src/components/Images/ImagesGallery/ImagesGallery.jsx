import { Container, ImageList, ImageListItem, Box, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import './ImagesGallery.css';

// Importing images from assets/imgs
import img1 from '../../../assets/imgs/image00001.jpeg';
import img2 from '../../../assets/imgs/image00002.jpeg';
import img3 from '../../../assets/imgs/image00003.jpeg';
import img4 from '../../../assets/imgs/IMG_2059.jpeg';
import img5 from '../../../assets/imgs/IMG_2067.jpeg';
import img6 from '../../../assets/imgs/IMG_2072.jpeg';
import img7 from '../../../assets/imgs/IMG_2077.jpeg';
import img8 from '../../../assets/imgs/IMG_2085.jpeg';
import img9 from '../../../assets/imgs/IMG_2171.jpeg';
import img10 from '../../../assets/imgs/IMG_2062.jpeg';

const itemData = [
  { img: img1, title: 'Gabinet 1', cols: 2, rows: 2 },
  { img: img10, title: 'Gabinet 6', cols: 1, rows: 1 },
  { img: img3, title: 'Gabinet 3', cols: 1, rows: 1 },
  { img: img4, title: 'Sprzęt 1', cols: 2, rows: 2 },
  { img: img5, title: 'Gabinet 4', cols: 1, rows: 1 },
  { img: img6, title: 'Gabinet 5', cols: 1, rows: 1 },
  
  { img: img7, title: 'Sprzęt 2', cols: 2, rows: 2 },
  { img: img8, title: 'Wnętrze 1', cols: 1, rows: 1 },
  { img: img9, title: 'Gabinet 6', cols: 1, rows: 1 },
  
   { img: img2, title: 'Gabinet 2', cols: 3, rows: 2 },
];

function ImagesGallery() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const cols = isMobile ? 1 : (isTablet ? 2 : 3);
    const rowHeight = isMobile ? 300 : (isTablet ? 400 : 500);

    return ( 
        <Container maxWidth='xl'>
            {/* Gallery-Content */}
            <Box component={motion.div} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{ py: { xs: 4, md: 8 } }}
            >
                <ImageList 
                    sx={{ 
                        width: '100%', 
                        height: 'auto', 
                        overflow: 'hidden',
                        margin: 0
                    }} 
                    cols={cols} 
                    gap={isMobile ? 12 : 24}
                    variant="quilted"
                    rowHeight={rowHeight}
                >
                    {itemData.map((item, index) => {
                        const itemCols = isMobile ? 1 : Math.min(item.cols || 1, cols);
                        const itemRows = isMobile ? 1 : (item.rows || 1);
                        
                        return (
                            <ImageListItem 
                                key={index} 
                                cols={itemCols} 
                                rows={itemRows}
                                className="gallery-item"
                            >
                                <img 
                                    src={item.img} 
                                    className="images-gallery-img" 
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </Box>
        </Container>
    );
}

export default ImagesGallery;