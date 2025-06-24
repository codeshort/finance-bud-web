import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.page';
import HomeDashboard from './pages/HomeDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-dashboard" element={<HomeDashboard />} />
      </Routes>
    </>
  );
}

export default App;
