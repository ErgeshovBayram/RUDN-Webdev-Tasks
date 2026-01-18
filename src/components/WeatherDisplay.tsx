import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Box, Paper, Typography, Container, CircularProgress } from '@mui/material';

function WeatherDisplay() {
  const queryManager = useQueryClient();

  const { data: weatherData, isLoading: isDataLoading, isError: hasError } = useQuery({
    queryKey: ['weather'],
    queryFn: async () => {
      const apiResponse = await fetch('https://api.open-meteo.com/v1/forecast?latitude=59.93&longitude=30.31&current_weather=true&hourly=temperature_2m');
      if (!apiResponse.ok) {
        throw new Error('Ошибка загрузки погоды');
      }
      return apiResponse.json();
    }
  });

  const postMutation = useMutation({
    mutationFn: async () => {
      const apiResponse = await fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      });
      if (!apiResponse.ok) {
        throw new Error('Ошибка отправки');
      }
      return apiResponse.json();
    },
    onSuccess: () => {
      queryManager.invalidateQueries({ queryKey: ['weather'] });
    }
  });

  const onButtonClick = () => {
    postMutation.mutate();
  };

  return (
    <Container maxWidth="md" sx={{ width: '100%' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Погода
          </Typography>
          
          {isDataLoading && (
            <Box sx={{ mt: 3 }}>
              <CircularProgress />
            </Box>
          )}

          {hasError && (
            <Typography color="error" sx={{ mt: 3 }}>
              Ошибка загрузки данных
            </Typography>
          )}

          {weatherData && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">
                Температура: {weatherData.current_weather?.temperature}°C
              </Typography>
            </Box>
          )}

          <Button 
            variant="contained" 
            onClick={onButtonClick} 
            sx={{ mt: 3 }}
            disabled={postMutation.isPending}
          >
            Обновить погоду
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default WeatherDisplay;
