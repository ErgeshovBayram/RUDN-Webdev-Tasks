import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Paper, Typography, Container } from '@mui/material';

function CodeEntry() {
  const [enteredCode, setEnteredCode] = useState('');
  const routerNavigate = useNavigate();

  useEffect(() => {
    if (enteredCode === 'SUPER2024') {
      routerNavigate('/activated');
    }
  }, [enteredCode, routerNavigate]);

  return (
    <Container maxWidth="md" sx={{ width: '100%' }}>
      <Paper elevation={3} sx={{ p: 6 }}>
        <Box>
          <Typography variant="h4" gutterBottom align="center">
            Введите промокод
          </Typography>
          <TextField
            fullWidth
            label="Промокод"
            variant="outlined"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            sx={{ mt: 3 }}
            size="large"
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default CodeEntry;
