import { Paper, Typography, Container, Box } from '@mui/material';

function PromoSuccess() {
  return (
    <Container maxWidth="md" sx={{ width: '100%' }}>
      <Paper elevation={3} sx={{ p: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div">
            Промокод применен!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default PromoSuccess;
