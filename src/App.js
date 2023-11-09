import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Board from "./pages/Board";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Calgary Kendo Club</h1>
          <Link onClick={() => scrollToSection(home)}>Home</Link>
          <Link onClick={() => scrollToSection(about)}>About</Link>
          <Link onClick={() => scrollToSection(contact)}>Contact</Link>

          <Link to={"/login"}>Login</Link>
          <Link to={"/join"}>Join</Link>
          <Link to={"/board"}>Board</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>

      <div ref={home} style={{ height: "1000px", backgroundColor: "pink" }}>
        <Home></Home>
      </div>
      <div ref={about} style={{ height: "1000px", backgroundColor: "blue" }}>
        <About></About>
      </div>
      <div
        ref={contact}
        style={{ height: "1000px", backgroundColor: "yellow" }}
      >
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
