import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';
import NotMatch from './components/notMatch/NotMatch';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
