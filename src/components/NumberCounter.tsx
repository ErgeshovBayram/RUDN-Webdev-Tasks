import { Box, Typography, Button, ButtonGroup, Paper, Container } from '@mui/material';
import useMyCounter from '../hooks/useMyCounter';

interface NumberCounterProps {
  initialValue?: number;
}

function NumberCounter({ initialValue }: NumberCounterProps) {
  const { currentNumber, addOne, subtractOne, resetToStart } = useMyCounter(initialValue);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="div" gutterBottom>
            {currentNumber}
          </Typography>
          <ButtonGroup variant="contained" sx={{ mt: 2 }}>
            <Button onClick={addOne}>+1</Button>
            <Button onClick={subtractOne}>-1</Button>
            <Button onClick={resetToStart}>Сброс</Button>
          </ButtonGroup>
        </Box>
      </Paper>
    </Container>
  );
}

export default NumberCounter;
