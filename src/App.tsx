import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.page';
import GroupDashboard from './pages/GroupDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group-dashboard" element={<GroupDashboard />} />
      </Routes>
    </>
  );
}

export default App;
