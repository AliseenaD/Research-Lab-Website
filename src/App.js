import '../src/Styles/App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Research from './Pages/Research';
import Publications from './Pages/Publications';
import About from './Pages/About';
import Team from './Pages/Team';
import HomeBanner from './Components/HomeBanner';
import HomeContent from './Pages/HomeContent';

function App() {

  return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeContent />}></Route>
            <Route path='/research' element={<Research />}></Route>
            <Route path='/publications' element={<Publications />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/team' element={<Team />}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
