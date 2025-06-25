import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.page';
import HomeDashboard from './pages/HomeDashboard';
import GroupDashboard from './pages/GroupsDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-dashboard" element={<HomeDashboard />} />
        <Route path="/groups-dashboard" element={<GroupDashboard />} />
      </Routes>
    </>
  );
}

export default App;
