import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup.pages';
import HomeDashboard from './pages/HomeDashboard.pages';
import GroupDashboard from './pages/GroupsDashboard.pages';
import InviteFriends from './pages/InviteFriends.pages';
import { NavigationEndpoints } from './configs/navigation/NavigationEndpoints';

function App() {
  return (
    <>
      <Routes>
        <Route
          path={NavigationEndpoints.ROOT}
          element={<Navigate to={NavigationEndpoints.SIGNUP} replace />}
        />
        <Route path={NavigationEndpoints.SIGNUP} element={<Signup />} />
        <Route path={NavigationEndpoints.LOGIN} element={<Login />} />
        <Route
          path={NavigationEndpoints.HOME_DASHBOARD}
          element={<HomeDashboard />}
        />
        <Route
          path={NavigationEndpoints.GROUPS_DASHBOARD}
          element={<GroupDashboard />}
        />
        <Route
          path={NavigationEndpoints.INVITE_FRIENDS}
          element={<InviteFriends />}
        />
      </Routes>
    </>
  );
}

export default App;
