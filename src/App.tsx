import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import Markets from './pages/Markets';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
