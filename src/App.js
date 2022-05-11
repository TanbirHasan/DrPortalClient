import logo from './logo.svg';
import './App.css';
import Navbar from './pages/shared/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Reviews from './pages/Reviews';

import Login from "./pages/Login";
import Contact from './pages/shared/Contact';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
