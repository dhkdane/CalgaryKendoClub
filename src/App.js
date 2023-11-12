import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteHandler from "./pages/handler/RouteHandler";
import Navibar from "./pages/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyComponent from "./pages/cmp";

function App() {
  return (
    <div>
      {/* <MyComponent /> */}
      <BrowserRouter>
        <Navibar />
        <RouteHandler />
      </BrowserRouter>
    </div>
  );
}

export default App;
