import  React  from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';



const dataset = [
  {score: 61, language: 'ExpressJs'},
  {score: 70, language: 'React'},
  {score: 60, language: 'Python'},
  {score: 73, language: 'Flask'},
  {score: 80, language: 'Symfony'},
  {score: 55, language: 'Angular'},
  {score: 100, language: 'Salesforce'},
  {score: 50, language: 'Docker'},
  {score: 70, language: 'MongoDb'},
  {score: 65, language: 'MySql'},
  {score: 48, language: 'Azure'},
  {score: 25, language: 'GCP'},
];
const valueFormatter = (value) => `${value}%`;

export default function SkillsChart(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')) || (window.innerWidth === 1024 && window.innerHeight === 1366);
  const style = isTablet ? { margin: '30px' } : { margin: '50px' };
  const barSize = isTablet ? 25 : isMobile ? 30 : 20;
  const barGap = isTablet ? 10 : isMobile ? 15 : 5;
  const {t} = useTranslation();
  

  return (
    <>
    
      {isMobile ? (
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: 'band', dataKey: 'language' }]}
          series={[{ dataKey: 'score', label:  t('Skills'), valueFormatter }]}
          layout="horizontal"
          width={400}
          height={1000}
          margin={{
            left: 142,
            right: 80,
            top: 80,
            bottom: 80,
          }}
          slotProps={{
            bar: {
              clipPath: `inset(0px round 0px 15px 15px 0px)`,
            },
          }}
          barSize={barSize}
          barGap={barGap}
          animation={{
            duration: 500,
            easing: 'easeOutCubic'
          }}
        />
      ) : (
       
        <Grid container>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3} sx={style}>
            <BarChart
              dataset={dataset}
              yAxis={[{ scaleType: 'band', dataKey: 'language' }]}
              series={[{ dataKey: 'score', label: t('Skills'), valueFormatter }]}
              layout="horizontal"
              width={isTablet ? 600 : 1200} 
              height={isTablet ? 600 : 700} 
              margin={{
                left: 142,
                right: 80,
                top: 80,
                bottom: 80,
              }}
              slotProps={{
                bar: {
                  clipPath: `inset(0px round 0px 15px 15px 0px)`,
                },
              }}
              barSize={barSize}
              barGap={barGap}
              animation={{
                duration: 20,
                easing: 'easeOutCubic'
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
