import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import jesusBuenPastor from '../img/jesus-buen-pastor.png';

export default function RecipeReviewCard() {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          margin: '0 auto',
          background: 'rgb(237,224,224)',
        }}>
        <CardHeader
          title='Escuela de pastoral'
          subheader='Inicio de curso 4 de septiembre, 2022'
        />
        <CardMedia
          component='img'
          image={jesusBuenPastor}
          alt='JESÚS BUEN PASTOR'
        />
        <CardContent>
          <Typography variant='body2' className='textBlue'>
            Te invita a conecer el mensaje que Cristo tiene para ti.
            <br />
            ¿Cúando?Todos los domingos a 8: 00 horas en la capilla de <br />
            <b className='boldSize'>Sagrado Corazón de María.</b> <br />
            <br />
            <b className='boldSize'>
              Iniciamos un nuevo curso el 4 de septiembre.
              <br />
              Inscripciones domingo 21 y 28 de agosto.
            </b>
          </Typography>
        </CardContent>
      </Card>
      <br />
      <br />
    </>
  );
}
