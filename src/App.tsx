import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

import {LayoutProject } from './pages/Projects';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<LayoutProject/>} />
      </Routes>
    </Router>
  );
}
