import React from 'react';
// import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './ResponsiveAppBar';
import RecipeReviewCard from './RecipeReviewCard';
import { Typography } from '@mui/material';

export const BasicGrid = () => {
  const styledBox = {flexGrow: 1, color: "rgb(48 48 48)", margin:"3%"};

  return (
    <>
    <ResponsiveAppBar />
    <Box sx={styledBox}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant='h1' className='title-h1'>
          CAPILLA <br/>  SAGRADO CORAZÓN DE MARÍA 
        </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={4}>
        <RecipeReviewCard/>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </Box></>
  );
}
