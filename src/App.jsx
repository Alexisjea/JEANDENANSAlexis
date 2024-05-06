import React, {useEffect} from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import Header from './components/pages/Home/Header';
import Footer from './components/pages/Home/Footer';
import Home from './components/pages/Home/Home';


function App() {
  useEffect(() => {
    document.title = "Portfolio de JEANDENANS Alexis";
  }, []);
  return (
    <Grid item xs={12} sm={6} md={4} >
     <Box  sx={{
      minHeight: '80vh', 
       width: '100%', 
       background: 'url("/paysage.jpg") no-repeat center center fixed', 
       backgroundSize: 'cover',
       margin:0,
       padding:0,
      pt: 8
     }}>
      <>
      <CssBaseline />
      
      <Header />
      <Home/>  
      
      <Footer/>
      </>
     
     </Box>
     </Grid>
  );
}

export default App;
