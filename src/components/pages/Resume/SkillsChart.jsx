import * as React from 'react';
import { BarChart  } from '@mui/x-charts/BarChart';
import { Grid } from '@mui/material';

// const chartSetting = {
//   xAxis: [
//     {
//       label: 'rainfall (mm)',
//     },
//   ],
//   width: 500,
//   height: 400,
// };


const dataset = [
  {
    score: 61,
    language: 'ExpressJs',
  },
  {
    score: 70,
    language: 'React',
  },
  {
    score: 60,
    language: 'Python',
  },
  {
    score: 73,
    language: 'Flask',
  },
  {
    score: 80,
    language: 'Symfony',
  },
  {
    score: 55,
    language: 'Angular',
  },
  {
    score: 100,
    language: 'Salesforce',
  },
  {
    score: 50,
    language: 'Docker',
  },
  {
    score: 70,
    language: 'MongoDb',
  },
  {
    score: 65,
    language: 'MySql',
  },
  {
    score: 48,
    language: 'Azure',
  },
  {
    score: 25,
    language: 'GCP',
  },
];
const valueFormatter = (value) => `${value}%`;
export default function SkillsChart(){
    return(
        <>
        <Grid container>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3} sx={{ width: '100%', height: '100%' }}>
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'language' }]}
                series={[{ dataKey: 'score', label: 'Skills', valueFormatter }]}
                layout="horizontal"
                // {...chartSetting}
                slotProps={{
                    bar: {
                        clipPath: `inset(0px round 0px 15px 15px 0px)`,
                    },
                }}
                
            />
        </Grid>
      </Grid>
        </>
    )
}