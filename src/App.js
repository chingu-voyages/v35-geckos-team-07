import { React, useState } from "react";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Horoscope from './Components/Horoscope';
import {BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import "./App.css";

function App() {

  const components = [<Home />, <Horoscope />,<About />,<Developers />]
  const [current, setCurrent] = useState(components[0]);
  return (
    <Router>
      <div className="page-container">
        <header>
          <Header setCurrent={setCurrent} components={components} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horoscope" element={<Horoscope />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    </Router>
   
  );
}

export default App;
