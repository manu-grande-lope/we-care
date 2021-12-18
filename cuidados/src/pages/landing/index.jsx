import React from 'react';
import { Grid } from '@mui/material';
import ServicesAndCarousel from '../../components/carouselEjemplo/index.jsx';
import Banner from '../../components/banner/index.jsx';

function Landing() {

  return (
    <Grid container>
      <Grid item container xs={12} mt="20px" spacing={2} justifyContent="space-around" flexDirection="row-reverse" flexWrap="wrap" >
      <ServicesAndCarousel/>
        </Grid>
        <Grid>
        <Banner/>
        </Grid>
    </Grid>
  );
}

export default Landing;