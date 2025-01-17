import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Resume from './components/Resume/Resume.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  console.log("App rendered");

  return (
    <BrowserRouter>
      <div>
        <NavBar />

        {/* Navigation Links */}
        <nav>
          <NavLink to="/" style={{ margin: "0 10px" }}>Home</NavLink>
          <NavLink to="/about" style={{ margin: "0 10px" }}>About</NavLink>
          <NavLink to="/projects" style={{ margin: "0 10px" }}>Projects</NavLink>
          <NavLink to="/resume" style={{ margin: "0 10px" }}>Resume</NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
