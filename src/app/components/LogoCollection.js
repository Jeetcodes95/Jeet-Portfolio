import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD?updatedAt=1701272916848',
  'https://www.urbanpay.in/images/UP-light.png',
  '/static/images/FCDimg.jpg',
  'https://www.prajsngo.com/prajs_logo.png'

];

const darkLogos = [
  'https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD?updatedAt=1701272916848',
  '/static/images/UP-light.jpg',
  '/static/images/fcd.jpg',
  'https://www.prajsngo.com/prajs_logo.png'

];

const logoStyle = {
  // width: '100px',
  height: '40px',
  margin: '0 32px',
  opacity: 1,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Trusted by the freelanced companies
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 1 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
