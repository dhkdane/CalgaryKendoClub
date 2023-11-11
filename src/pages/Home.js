import React, { useRef, useEffect } from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Home = () => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Scroll to the section based on the URL hash
    const sectionId = window.location.hash.substr(1);
    if (sectionId) {
      const ref = {
        main: mainRef,
        about: aboutRef,
        contact: contactRef,
      }[sectionId];
      if (ref && ref.current) {
        scrollToSection(ref);
      }
    }
  }, []);

  return (
    <div>
      <ButtonGroup
        vertical
        aria-label="Basic example"
        style={{ position: "fixed", top: "15%", left: 0 }}
      >
        <Button onClick={() => scrollToSection(mainRef)}>Main</Button>
        <Button onClick={() => scrollToSection(aboutRef)}>About</Button>
        <Button onClick={() => scrollToSection(contactRef)}>Contact</Button>
      </ButtonGroup>
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

// import React from "react";

// import { useRef } from "react";
// import Main from "./Main";
// import About from "./About";
// import Contact from "./Contact";

// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

// const Home = () => {
//   const refs = {
//     main: useRef(null),
//     about: useRef(null),
//     contact: useRef(null),
//   };

//   const scrollToSection = (elementRef) => {
//     window.scrollTo({
//       top: elementRef.current.offsetTop,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div>
//       <ButtonGroup
//         vertical
//         aria-label="Basic example"
//         style={{ position: "fixed", top: "15%", left: 0 }}
//       >
//         <Button onClick={() => scrollToSection(refs.main)}>Main</Button>
//         <Button onClick={() => scrollToSection(refs.about)}>About</Button>
//         <Button onClick={() => scrollToSection(refs.contact)}>Contact</Button>
//       </ButtonGroup>
//       <div
//         ref={refs.main}
//         style={{ height: "1000px", backgroundColor: "pink" }}
//       >
//         <Main />
//       </div>
//       <div
//         ref={refs.about}
//         style={{ height: "1000px", backgroundColor: "blue" }}
//       >
//         <About />
//       </div>
//       <div
//         ref={refs.contact}
//         style={{ height: "1000px", backgroundColor: "yellow" }}
//       >
//         <Contact />
//       </div>
//     </div>
//   );
// };
// export default Home;
