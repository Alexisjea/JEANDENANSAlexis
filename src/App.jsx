import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/pages/Home/Header';
import Footer from './components/pages/Home/Footer';
import About from './components/pages/About/About';
import StatsCard from './components/pages/Home/StatsCard';

function App() {
  return (
     <Box sx={{
      minHeight: '80vh', // Assurez que l'image couvre toute la hauteur de la vue
       width: '100%', // Assurez que l'image couvre toute la largeur de la vue
       background: 'url("/paysage.jpg") no-repeat center center fixed', // Utilisez le chemin correct vers votre image
       backgroundSize: 'cover',
       margin:0,
       padding:0,
      pt: 8
     }}>
      <>
      <CssBaseline />
      
      <Header />
      <About/>  
      <StatsCard/>
      <Footer/>
      </>
     
     </Box>
  );
}

export default App;
