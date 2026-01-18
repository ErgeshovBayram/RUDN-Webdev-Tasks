import NumberCounter from './components/NumberCounter';
import './App.css';

function App() {
  return (
    <>
      <NumberCounter initialValue={5} />
      <NumberCounter />
    </>
  );
}

export default App;
