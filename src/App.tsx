import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ← Correção aqui
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </Router>
  );
}