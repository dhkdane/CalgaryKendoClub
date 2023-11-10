import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import Home from "./Home";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Join from "./Join";
import Board from "./Board";
import Info from "./Info";

function Nav() {
  const main = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link onClick={() => scrollToSection(main)} to={"/"}>
            Main
          </Link>
          <Link onClick={() => scrollToSection(about)} to={"/"}>
            About
          </Link>
          <Link onClick={() => scrollToSection(contact)} to={"/"}>
            Contact
          </Link>

          <Link to={"/login"}>Login</Link>
          <Link to={"/join"}>Join</Link>
          <Link to={"/board"}>Board</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home mainRef={main} aboutRef={about} contactRef={contact} />
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Nav;
