import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DownloadOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';

const splitTextToLetters = (text) => {
  return text.split('').map((char, index) => ({
    id: index,
    char,
  }));
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};


export default function Hero() {

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '80%', sm: '100%' } }}>
         
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
             alignItems: 'center',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
          <img style={{alignSelf: 'center'}} width={120} src='/static/images/download.png' alt='hi-five'/> 
          <motion.span
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
           Hello! I'm &nbsp;
              </motion.span>
           <Typography
  component="span"
  variant="h1"
  sx={{
    fontSize: 'clamp(2rem, 10vw, 3.5rem)',
    backgroundImage: (theme) =>
      theme.palette.mode === 'light'
        ? 'linear-gradient(to right, #FFC007, orange)'
        : `linear-gradient(to right, yellow, orange)`,
    WebkitBackgroundClip: 'text', // Ensures text is filled with the gradient
    color: 'transparent', // Hides original text color
  }}
>
<motion.span
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
  Jeetendra Kumar Barman
              </motion.span>
</Typography>

          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                fontSize: 'clamp(1rem, 5vw, 2rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? '#000' : '#FFF',
              }}
            >
            A &nbsp;
            </Typography>
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: 'clamp(1rem, 5vw, 2rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? '#000' : '#FFF',
              }}
            >
            MERN Stack Developer &nbsp;
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: 'clamp(1rem, 5vw, 2rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? '#FEB902' : '#FEB902',
              }}
            >|&nbsp;</Typography>
            Tech Enthusiast
            </Typography>
            
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button startIcon={<DownloadOutlined/>} variant="outlined" size='large' >
              Resume
            </Button>
            <Button variant="contained" size='large' color="error">
              Hire Me
            </Button>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/qq.jpg")'
                : 'url("/static/images/gg-removebg.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
