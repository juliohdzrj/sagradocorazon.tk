import React from 'react';
// import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './ResponsiveAppBar';
import RecipeReviewCard from './RecipeReviewCard';
import { Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export const BasicGrid = () => {
  const styledBox = { flexGrow: 1, color: 'rgb(48 48 48)', margin: '3%' };

  const locationUrl = (url) => {
    window.open(`${url}`, '_self');
  };

  const sendMessage = () => {
    const isMobileValidate = isMobile();
    let target = '';
    let number = '+525516219867';
    let msg =
      'Hola!, me pueden dar informes sobre la escuela de pastoral, Gracias.';
    isMobileValidate === true
      ? (target = `whatsapp://send?phone=${encodeURIComponent(
          number,
        )}&text=${encodeURIComponent(msg)}`)
      : (target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
          number,
        )}&text=${encodeURIComponent(msg)}`);
    window.open(target, '_self');
  };

  function isMobile() {
    if (
      /Android | webOS | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={styledBox}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' className='title-h1'>
              CAPILLA <br /> SAGRADO CORAZÓN DE MARÍA
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
      <Fab
        size='small'
        aria-label='WhatsApp'
        className='whatsappButton'
        onClick={sendMessage}>
        <WhatsAppIcon />
      </Fab>
      <Fab
        size='small'
        aria-label='Location'
        className='locationButton'
        onClick={()=>locationUrl('https://goo.gl/maps/oxmgzZoYHogm7sXp9')}>
        <LocationOnIcon />
      </Fab>
      <Fab
        size='small'
        aria-label='youtube'
        className='youtubeButton'
        onClick={()=>locationUrl('https://www.youtube.com/channel/UCMaenLMDmaaqgsf1vvjFs6g/featured')}>
        <YouTubeIcon />
      </Fab>
      <Fab
        size='small'
        aria-label='facebook'
        className='facebookButton'
        onClick={()=>locationUrl('https://www.facebook.com/profile.php?id=100086445518258&sk=about')}>
        <FacebookIcon />
      </Fab>
    </>
  );
};
