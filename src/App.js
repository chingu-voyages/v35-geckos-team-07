import { React, useState } from "react";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Horoscope from './Components/Horoscope';
import "./App.css";

function App() {

  const components = [<Home />, <Horoscope />,<About />,<Developers />]
  const [current, setCurrent] = useState(components[0]);
  return (
    <div className="page-container">
      <header>
        <Header setCurrent={setCurrent} components={components} />
      </header>
      <main>
        {current}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
