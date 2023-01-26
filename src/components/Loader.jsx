import { Box, CircularProgress, Stack, Typography } from '@mui/material'

const Loader = () => {
  return (
    <Box minHeight='95vh'>
      <Stack height='80vh' display='flex' alignItems='center' justifyContent='center'>
        <CircularProgress size={80} sx={{ color: 'red' }} />
        <Typography variant='body1' color='#fff'>
          Loading...
        </Typography>
      </Stack>
    </Box>
  )
}

export default Loader
