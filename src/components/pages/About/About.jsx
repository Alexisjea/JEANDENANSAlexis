import * as React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ConstructionIcon from '@mui/icons-material/Construction';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';


export default function About() {
  const {t}  = useTranslation();
  return (
     <>
    <Box  sx={{ flexGrow: 1, padding: 4, background: 'transparent', bgcolor: 'background.default' }}>
        <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom:'60px',
                
                }}align='center'> {t('about_me')} </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} md={4} sx={{borderRight:{  md: 'solid 1px' }}}>
            
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            
            <SchoolIcon sx={{ fontSize: 40 }}  />
            
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                fontSize: '3rem',
                fontWeight: 'bold',
                marginTop:'20px'
                }}  >
              {t('education')}
            </Typography>
            <Typography sx={{marginTop:'20px'}} variant="subtitle1">
              {t('master_2_year')}
            </Typography>
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                fontSize: '1rem',
                fontWeight: 'bold',
                marginTop:'20px'
                }}  >
             {t('expert_title')}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={4} sx={{borderRight:{  md: 'solid 1px' }}} >
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            <ConstructionIcon sx={{ fontSize: 40 }}  />
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                fontSize: '3rem',
                fontWeight: 'bold',
                marginTop:'20px'
                }}  >
              {t('years_experience')}
            </Typography>
            <Typography sx={{marginTop:'20px'}}  variant="subtitle1">
              {t('development_since_2021')}
            </Typography>
            
          </Container>
        </Grid>
        <Grid item xs={12} md={4} sx={{borderRight:{  md: 'solid 1px' }}}>
          <Container elevation={10} sx={{ padding: 2, textAlign: 'center' }}>
            <GitHubIcon sx={{ fontSize: 40 }}  />
            <Typography variant="h3" component="h3" sx={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', 
                fontSize: '3rem',
                fontWeight: 'bold',
                marginTop:'20px'
                }}  >
              53
            </Typography>
            <Typography sx={{marginTop:'20px'}} variant="subtitle1">
              {t('repositories')}
            </Typography>
            <Typography>
              {t('github_repositories')}
            </Typography>
          </Container>
        </Grid>
        
      </Grid>
      
    </Box>
   </>);
 
}
