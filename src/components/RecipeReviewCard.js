import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import jesusBuenPastor from '../img/jesus-buen-pastor.png';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const locationUrl = () => {
    window.open('https://goo.gl/maps/oxmgzZoYHogm7sXp9', '_self');
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
    // credit to Timothy Huang for this regex test:
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
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
    <Card
      sx={{ maxWidth: 345, margin: '0 auto', background: 'rgb(237,224,224)' }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
          Te invita a conecer el mensaje que Cristo tiene para ti. <br />
          ¿Cúando? Todos los domingos a 8:00 horas en la capilla de <br />
          <b className='boldSize'>Sagrado Corazón de María.</b> <br />
          <br />
          <b className='boldSize'>
            {' '}
            Iniciamos un nuevo curso el 4 de septiembre.
            <br />
            Inscripciones domingo 21 y 28 de agosto.
          </b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Informes' onClick={sendMessage}>
          <WhatsAppIcon sx={{ color: 'green' }} />
        </IconButton>
        <IconButton aria-label='Dirección' onClick={locationUrl}>
          <LocationOnIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
