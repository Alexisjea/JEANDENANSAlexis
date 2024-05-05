import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function MaterialKitCard() {
 
  return (
    <Box sx={{ margin: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345, boxShadow: 3}} >
        <CardMedia
          component="img"
          height="140"
          image="/paysage.jpg" 
          alt="Feel the Material Kit"
          color="primary"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Feel the Material Kit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All the MUI components that you need in a development have been re-design with the new look.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MaterialKitCard;
