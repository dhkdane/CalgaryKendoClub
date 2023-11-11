import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Join from "../Join";
import Board from "../Board";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/join", element: <Join /> },
  { path: "/board", element: <Board /> },
  // Add more routes as needed
];

function RouteHandler() {
  return (
    <div>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default RouteHandler;
