import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StatsCard from '../Home/StatsCard';
import MaterialKitCard from '../Projects/MaterialKitCard';


const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function About() {
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
                    <StatsCard/>    
                </Box>
                <Box sx={{ my: 4 }}>
                    
                </Box>
                <MaterialKitCard/>
                <MaterialKitCard/>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
