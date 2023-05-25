import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.tsx';
import About from './components/About.tsx'
import Projects from './components/Projects.tsx';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <hr/>
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default App;
