import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Join from "./Join";
import Board from "./Board";

function Action() {
  return (
    <div>
      <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/join"}>Join</Link>
        <Link to={"/board"}>Board</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Action;
