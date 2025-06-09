import './App.css';
import Login from './pages/Login.pages';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
