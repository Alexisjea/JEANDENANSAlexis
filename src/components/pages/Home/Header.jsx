import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';



function Header() {
     const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.8)');
     const [color, setColor] = useState('rgba(255, 255, 255, 0.8)');

  useEffect(() => {
    const handleScroll = () => {
      // Définit la couleur de fond en noir après un certain point de défilement (par exemple 100px)
      if (window.scrollY > 100) {
        setBgColor('black');
        setColor('white');
      } else {
        setBgColor('rgba(255, 255, 255, 0.8)');
        setColor('rgb(52, 71, 103)');
        
      }
    };

    // Ajout de l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <AppBar position="fixed" sx={{
      width: '50%',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: bgColor, 
      color: color,
      boxShadow: 'none',
      zIndex: 1100,
      borderRadius: '20px',
      marginTop:'10px'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Docs</Button>
        </Box>
        <Button color="primary" variant="contained" sx={{ borderRadius: "10px", backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232)', letterSpacing: '0.02857em' }}>
          BUY NOW
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
