import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar    from './component/NavBar';
import AboutPage from './pags/AboutPage';
import HomePage  from './pags/HomePage';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route Path="/about" element={<AboutPage />}/>
      </Routes>

    </Router>
  );
  
}
export default App;
