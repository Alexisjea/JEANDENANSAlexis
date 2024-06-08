import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import SkillsChart from '../Resume/SkillsChart';
import About from '../About/About';
import Projects from '../Projects/Projects';
import { useTranslation } from 'react-i18next';

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Home() {

  const {t} = useTranslation();

  return (
  <>
  <Box
                  sx={{
                      p: 2,
                      borderRadius: 2,    
                      display: 'flex',
                      gridTemplateColumns: { md: '1fr 1fr' },
                      gap: 2,
                      marginTop:'80px',
                      opacity:0.9
                  }}
                >   
                  <About/>    
                </Box>
     <Grid  justifyContent="center" sx={{marginTop:'200px', bgcolor: 'background.default'}}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={11} key={index} >
          <ThemeProvider theme={theme}>
            <Box >
                
                <Box sx={{ flexGrow: 1, padding: 4 }} >
                  <Typography variant="h3" component="h3" 
                    sx={{
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom:'60px',
                    }}align='center'>
                      <h3 id='skills'>{t('Skills')}</h3>
                  </Typography>
                  <Grid container spacing={4}>
                    <SkillsChart/> 
                  </Grid>
                
                <Typography variant="h3" component="h3" sx={{
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom:'60px',
                }}align='center'   >
                  <h3 id='projects'>{t('Projects')}</h3> 
                </Typography>
                <Box sx={{backgroundColor:'#000000',borderRadius:'35px', height:{sm:'1600px',md:'400px'}, p:3}}>
                  <Projects/>
                </Box>
                  
                </Box>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid></>
  );
}
