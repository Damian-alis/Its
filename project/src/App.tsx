import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Types from './pages/Types';
import Prevention from './pages/Prevention';
import Symptoms from './pages/Symptoms';
import Treatments from './pages/Treatments';
import MythsAndFacts from './pages/MythsAndFacts';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tipos" element={<Types />} />
          <Route path="prevencion" element={<Prevention />} />
          <Route path="sintomas" element={<Symptoms />} />
          <Route path="tratamientos" element={<Treatments />} />
          <Route path="mitos-y-realidades" element={<MythsAndFacts />} />
          <Route path="recursos" element={<Resources />} />
          <Route path="cuestionario" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;