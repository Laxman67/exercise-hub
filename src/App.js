import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerciseDetails/:id" element={<ExerciseDetails />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
