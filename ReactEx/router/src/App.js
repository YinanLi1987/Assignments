import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './conponents/NavBar';
import Footer from './conponents/Footer';



function App() {
  return (
    <>
     <NavBar />
   <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
   </Routes>
   <Footer/>
    </>
  
  );
}

export default App;
