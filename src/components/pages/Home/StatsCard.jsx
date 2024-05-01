import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

function StatsCard() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, background: 'transparent' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} sx={{borderRight:'solid 1px'}}>
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', // Exemple de gradient
                fontSize: '3rem',
                fontWeight: 'bold',
                }}  >
              300+
            </Typography>
            <Typography variant="subtitle1">
              Coded Elements
            </Typography>
            <Typography>
              From buttons, to inputs, navbars, alerts or cards, you are covered.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={4} sx={{borderRight:'solid 1px'}} >
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', // Exemple de gradient
                fontSize: '3rem',
                fontWeight: 'bold',
                }}  >
              100+
            </Typography>
            <Typography variant="subtitle1">
              Design Blocks
            </Typography>
            <Typography>
              Mix the sections, change the colors and unleash your creativity
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={4} sx={{borderRight:'solid 1px'}}>
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', // Exemple de gradient
                fontSize: '3rem',
                fontWeight: 'bold',
                }}  >
              41
            </Typography>
            <Typography variant="subtitle1">
              Pages
            </Typography>
            <Typography>
              Save 3-4 weeks of work when you use our pre-made pages for your website
            </Typography>
          </Container>
        </Grid>
        
      </Grid>
      
    </Box>
  );
}

export default StatsCard;
