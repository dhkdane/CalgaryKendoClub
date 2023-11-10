import React from "react";
import { useRef } from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";

function Info(props) {
  return (
    <div>
      <div
        ref={props.main}
        style={{ height: "1000px", backgroundColor: "pink" }}
      >
        <Main></Main>
      </div>
      <div
        ref={props.about}
        style={{ height: "1000px", backgroundColor: "blue" }}
      >
        <About></About>
      </div>
      <div
        ref={props.contact}
        style={{ height: "1000px", backgroundColor: "yellow" }}
      >
        <Contact></Contact>
      </div>
    </div>
  );
}
export default Info;
