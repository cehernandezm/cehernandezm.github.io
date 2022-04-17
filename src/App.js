import './App.css';
import '@fontsource/roboto/400.css';

import {
  HashRouter  as Router,
  Routes,
  Route
} from 'react-router-dom'

//layouts
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
//Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
//Components 
import Body from './layouts/Body/Body'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/about"} element={<Body><About /></Body>} />
        <Route exact path={process.env.PUBLIC_URL + "/contact"} element={<Body><Contact /></Body>} />
        <Route path="*" element={<Body><Home /></Body>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
