import { useState } from 'react';

function useMyCounter(startValue: number = 0) {
  const [currentNumber, setCurrentNumber] = useState(startValue);

  const addOne = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const subtractOne = () => {
    setCurrentNumber(currentNumber - 1);
  };

  const resetToStart = () => {
    setCurrentNumber(startValue);
  };

  return {
    currentNumber,
    addOne,
    subtractOne,
    resetToStart
  };
}

export default useMyCounter;
