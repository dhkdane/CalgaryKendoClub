import React from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";

const Home = ({ mainRef, aboutRef, contactRef }) => {
  return (
    <div>
      <div ref={mainRef} style={{ height: "1000px", backgroundColor: "pink" }}>
        <Main />
      </div>
      <div ref={aboutRef} style={{ height: "1000px", backgroundColor: "blue" }}>
        <About />
      </div>
      <div
        ref={contactRef}
        style={{ height: "1000px", backgroundColor: "yellow" }}
      >
        <Contact />
      </div>
    </div>
  );
};
export default Home;
