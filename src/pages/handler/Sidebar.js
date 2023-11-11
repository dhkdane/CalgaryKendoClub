import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function Sidebar() {
  return (
    <div>
      <ListGroup defaultActiveKey="#link1">
        <Link to={"/"}>
          <ListGroup.Item action href="#link1">
            home
          </ListGroup.Item>
        </Link>
        <Link to={"/login"}>
          <ListGroup.Item action href="#link4">
            login
          </ListGroup.Item>
        </Link>
        <Link to={"/join"}>
          <ListGroup.Item action href="#link5">
            Join
          </ListGroup.Item>
        </Link>
        <Link to={"/board"}>
          <ListGroup.Item action href="#link6">
            Board
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
}
export default Sidebar;
