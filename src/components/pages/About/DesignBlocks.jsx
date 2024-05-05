import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog , Paper} from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Carousel from 'react-material-ui-carousel'; // Assurez-vous d'installer ce package

const FlipCard = styled('div')({
  backgroundColor: 'transparent',
  width: {xs:'300px',md:'400px'},
  height: '300px',
  perspective: '1000px',
});

const FlipCardInner = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
}));

const CardFace = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
});

const FlipCardFront = styled(CardFace)({
  backgroundColor: '#bbb',
  color: 'black',
  opacity: '0.8'
});

const FlipCardBack = styled(CardFace)({
  backgroundColor: 'black',
  color: 'white',
  transform: 'rotateY(180deg)',
});

function DesignBlocks() {
  const [open, setOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
   const blocks = [
    
    { title: "GSS", annee: "Mars 2022", imageUrl: "/img/appGretaHome.png" },
    { title: "GSS", annee: "Mars 2022", imageUrl: "/img/appGretaLogin.png" },
    { title: "Jangular", annee: "Decembre 2023", imageUrl: "/img/jangularLogin.png" },
    { title: "Jangular", annee: "Decembre 2023", imageUrl: "/img/jangularRegister.png" },
    { title: "Jangular", annee: "Decembre 2023", imageUrl: "/img/jangularproducts.png" },
    { title: "Umans", annee: "Mars 2024", imageUrl: "/img/umansLogin.png" },
    { title: "Umans", annee: "Mars 2024", imageUrl: "/img/umanRegister.png" },
    { title: "Umans", annee: "Mars 2024", imageUrl: "/img/umansProducts.png" },
    { title: "Umans", annee: "Mars 2024", imageUrl: "/img/umansHome.png" },
    { title: "Portfolio", annee: "Mai 2024", imageUrl: "/img/portfolioAbout.png" },
    { title: "Portfolio", annee: "Mai 2024", imageUrl: "/img/portfolioSkills.png" },
    { title: "Portfolio", annee: "Mai 2024", imageUrl: "/img/portfolioProjects.png" },  
  ];
  const blocksUnique = blocks.reduce((acc, current) => {
    const x = acc.find(item => item.title === current.title);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const handleClickOpen = (title) => {
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
      <Grid  container spacing={4} justifyContent="center">
        {blocksUnique.map((block, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard>
              <FlipCardInner>
                <FlipCardFront>
                  <img src={block.imageUrl} alt={block.title} style={{ width: '100%', height: '300px' }} />
                </FlipCardFront>
                <FlipCardBack>
                  <Typography variant="h5" sx={{marginTop:'20px'}} color="primary">{block.title}</Typography>
                  <Typography variant="h5" sx={{marginTop:'40px'}} color="primary">{block.annee}</Typography>
                  <Button onClick={() => handleClickOpen(block.title)} sx={{marginTop:'60px'}} color="primary" variant="contained" startIcon={<VisibilityIcon />}>
                    Voir plus
                  </Button>
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Carousel>
          {blocks.filter(block => block.title === selectedTitle)
                 .map((block, index) => (
            <img key={index} src={block.imageUrl} alt={block.title} style={{ width: '100%', height: 'auto' }} />
          ))}
        </Carousel>
        <Paper></Paper>
      </Dialog>
    </Box>
  );
}

export default DesignBlocks;
