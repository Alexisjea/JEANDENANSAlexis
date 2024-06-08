import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Carousel from 'react-material-ui-carousel'; // Assurez-vous d'installer ce package
import { useTranslation } from 'react-i18next';

const FlipCard = styled('div')({
  backgroundColor: 'transparent',
  width: {xs:'300px',md:'400px'},
  height: '300px',
  perspective: '1000px',
  '&:hover': {
    transform: 'scale(1.15)',
    
  },
});

const FlipCardInner = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s ease-in-out',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
  borderRadius: '25px',
  '&:hover': {
   
    transform: 'rotateY(180deg)',
  },
}));

const CardFace = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '20px',
});

const FlipCardFront = styled(CardFace)({
  backgroundColor: '#bbb',
  color: 'black',
  opacity: '0.8',
  borderRadius: '20px'
});

const FlipCardBack = styled(CardFace)({

  color: 'white',
  transform: 'rotateY(180deg)',

  background: 'rgb(2,0,36)',
  background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  borderRadius: '20px',
  boxShadow:'0.2',
  
});

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const {t} = useTranslation();
   const blocks = [
    
    { title: "GSS",
    description:"Application developpée en Java (spring boot et pour l'interface j'ai utilisé thymeleaf)", 
    annee: "Mars 2022", imageUrl: "/img/appGretaHome.png" },
    { title: "GSS",description:"", annee: "Mars 2022", imageUrl: "/img/appGretaLogin.png" },
    { title: "Jangular",
    description:"Appliacation developpée en Angular et le framework UI Material angular connecté a une API en Express.js", 
    annee: "Decembre 2023", imageUrl: "/img/jangularLogin.png" },
    { title: "Jangular",description:"Appliacation developpée en Angular et le framework UI Material angular connecté a une API en Express.js", annee: "Decembre 2023", imageUrl: "/img/jangularRegister.png" },
    { title: "Jangular",description:"Appliacation developpée en Angular et le framework UI Material angular connecté a une API en Express.js", annee: "Decembre 2023", imageUrl: "/img/jangularproducts.png" },
    { title: "Umans", description:"Appliacation developpée en React et le framework UI MaterialUI connecté a une API en Express.js",annee: "Mars 2024", imageUrl: "/img/umansLogin.png" },
    { title: "Umans",description:"Appliacation developpée en React et le framework UI MaterialUI connecté a une API en Express.js", annee: "Mars 2024", imageUrl: "/img/umanRegister.png" },
    { title: "Umans",description:"Appliacation developpée en React et le framework UI MaterialUI connecté a une API en Express.js", annee: "Mars 2024", imageUrl: "/img/umansProducts.png" },
    { title: "Umans",description:"Appliacation developpée en React et le framework UI MaterialUI connecté a une API en Express.js", annee: "Mars 2024", imageUrl: "/img/umansHome.png" },
    { title: "Portfolio",description:"Appliacation developpée en React et le framework UI MaterialUI ", annee: "Mai 2024", imageUrl: "/img/portfolioAbout.png" },
    { title: "Portfolio",description:"Appliacation developpée en React et le framework UI MaterialUI ", annee: "Mai 2024", imageUrl: "/img/portfolioSkills.png" },
    { title: "Portfolio",description:"Appliacation developpée en React et le framework UI MaterialUI ", annee: "Mai 2024", imageUrl: "/img/portfolioProjects.png" },  
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
    <Box sx={{ flexGrow: 1, padding: 4, display: 'flex', justifyContent: 'center' }}>
      <Grid  container spacing={4} justifyContent="center">
        {blocksUnique.map((block, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard>
              <FlipCardInner>
                <FlipCardFront>
                  <img src={block.imageUrl} alt={block.title} style={{ width: '100%', height: '300px' }} />
                </FlipCardFront>
                <FlipCardBack>
                  <Typography variant="h4" sx={{marginTop:'10px'}} >{block.annee}:  </Typography>
                  <Typography variant="h5" sx={{marginTop:'10px'}} >{block.title}</Typography>
                  <Typography variant="h5" sx={{marginTop:'10px'}} >{block.description}</Typography>
                  <Button onClick={() => handleClickOpen(block.title)} sx={{marginTop:'50px'}} color="primary" variant="contained" startIcon={<VisibilityIcon />}>
                    {t('see_more')}
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
      
    </Dialog>
    </Box>
  );
}

export default Projects;
