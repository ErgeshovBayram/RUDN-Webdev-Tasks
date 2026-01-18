import WeatherDisplay from './components/WeatherDisplay';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <WeatherDisplay />
    </Box>
  );
}

export default App;
