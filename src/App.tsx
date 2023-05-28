import './App.css';
import { BrowserRouter as Router,  Route, Routes, Navigate} from "react-router-dom";
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
            <Route path="/" element={<Navigate to={"/about"} replace/>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default App;
