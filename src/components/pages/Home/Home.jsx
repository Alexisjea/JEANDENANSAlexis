import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import SkillsChart from '../Resume/SkillsChart';
import About from '../About/About';
import Projects from '../Projects/Projects';

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Home() {
  return (
     <Grid container spacing={2} justifyContent="center" sx={{marginTop:'200px'}}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={11} key={index} >
          <ThemeProvider theme={theme}>
            <Box sx={{bgcolor: 'background.default',}}>
                <Box
                  sx={{
                      p: 2,
                      borderRadius: 2,    
                      display: 'flex',
                      gridTemplateColumns: { md: '1fr 1fr' },
                      gap: 2,
                  }}
                >   
                  <About/>    
                </Box>
                <Box sx={{ flexGrow: 1, padding: 4 }}>
                  <Typography variant="h3" component="h3" 
                    sx={{
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom:'60px',
                    }}align='center'>
                      <h3 id='skills'>Skills</h3>
                  </Typography>
                  <Grid container spacing={4}>
                    <SkillsChart/> 
                  </Grid>
                </Box>
                <Typography variant="h3" component="h3" sx={{
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom:'60px',
                }}align='center'   >
                  <h3 id='projects'>Projects</h3> 
                </Typography>
                  <Projects/>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
