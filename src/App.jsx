import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffProfileCreate from './components/StaffProfileCreate';
import StaffProfileView from './components/StaffProfileView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffProfileCreate />} />
        <Route path="/view" element={<StaffProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;