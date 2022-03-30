import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//layouts
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
//Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
