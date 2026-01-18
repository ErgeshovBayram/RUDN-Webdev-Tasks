import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, ButtonGroup, List, ListItem, Paper, Container } from '@mui/material';

function TimeTracker() {
  const [currentTime, setCurrentTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [speedFactor, setSpeedFactor] = useState(1);
  const [savedLaps, setSavedLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => prev + (1 * speedFactor));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerActive, speedFactor]);

  const formatTimeDisplay = (totalSeconds: number) => {
    const hoursValue = Math.floor(totalSeconds / 3600);
    const minutesValue = Math.floor((totalSeconds % 3600) / 60);
    const secondsValue = Math.floor(totalSeconds % 60);
    return `${String(hoursValue).padStart(2, '0')}:${String(minutesValue).padStart(2, '0')}:${String(secondsValue).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setCurrentTime(0);
    setSavedLaps([]);
    setSpeedFactor(1);
  };

  const handleLapRecord = () => {
    setSavedLaps([...savedLaps, currentTime]);
  };

  const handleSpeedUp = () => {
    if (speedFactor < 2) {
      setSpeedFactor(speedFactor * 2);
    }
  };

  const handleSlowDown = () => {
    if (speedFactor > 0.5) {
      setSpeedFactor(speedFactor / 2);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" gutterBottom>
            {formatTimeDisplay(currentTime)}
          </Typography>

          <ButtonGroup variant="contained" sx={{ mt: 2, mb: 2 }}>
            <Button onClick={handleStart} disabled={timerActive}>
              Запустить
            </Button>
            <Button onClick={handleStop} disabled={!timerActive}>
              Остановить
            </Button>
            <Button onClick={handleReset}>
              Сброс
            </Button>
          </ButtonGroup>

          <Box sx={{ mt: 2, mb: 2 }}>
            <ButtonGroup variant="outlined">
              <Button onClick={handleSpeedUp} disabled={speedFactor >= 2}>
                Ускорить x2
              </Button>
              <Button onClick={handleSlowDown} disabled={speedFactor <= 0.5}>
                Замедлить x0.5
              </Button>
              <Button onClick={handleLapRecord}>
                Круг
              </Button>
            </ButtonGroup>
          </Box>

          {savedLaps.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Записанные круги:
              </Typography>
              <List>
                {savedLaps.map((lapValue, index) => (
                  <ListItem key={index}>
                    <Typography>
                      Круг {index + 1}: {formatTimeDisplay(lapValue)}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default TimeTracker;
