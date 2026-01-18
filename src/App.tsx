import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CodeEntry from './components/CodeEntry';
import PromoSuccess from './components/PromoSuccess';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CodeEntry />} />
          <Route path="activated" element={<PromoSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
