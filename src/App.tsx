import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.pages';
import HomeDashboard from './pages/HomeDashboard.pages';
import GroupDashboard from './pages/GroupsDashboard.pages';
import InviteFriends from './pages/InviteFriends.pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-dashboard" element={<HomeDashboard />} />
        <Route path="/groups-dashboard" element={<GroupDashboard />} />
        <Route path="/invite" element={<InviteFriends />} />
      </Routes>
    </>
  );
}

export default App;
