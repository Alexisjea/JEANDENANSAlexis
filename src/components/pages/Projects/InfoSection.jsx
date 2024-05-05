import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article'; 
import SpeedIcon from '@mui/icons-material/Speed'; 
import DevicesIcon from '@mui/icons-material/Devices';
import MoneyIcon from '@mui/icons-material/Euro';

function InfoSection() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={0}>
            <CardContent>
              <ArticleIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Full Documentation
              </Typography>
              <Typography variant="body2">
                Built by developers for developers. Check the foundation and you will find everything inside our documentation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={0}>
            <CardContent>
              <SpeedIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                MUI Ready
              </Typography>
              <Typography variant="body2">
                The world's most popular react components library for building user interfaces.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={0}>
            <CardContent>
              <MoneyIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Save Time & Money
              </Typography>
              <Typography variant="body2">
                Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={0}>
            <CardContent>
              <DevicesIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Fully Responsive
              </Typography>
              <Typography variant="body2">
                Regardless of the screen size, the website content will naturally fit the given resolution.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoSection;
