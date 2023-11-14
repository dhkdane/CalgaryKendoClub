import React from "react";
import Table from "react-bootstrap/Table";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      // style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const tasks = [
  {
    id: 1,
    title: "Kendo",
    description: "kendo!!",
    author: "Mark",
    date: "11-11-2023",
    views: 11,
  },
  {
    id: 2,
    title: "judo",
    description: "judo!!",
    author: "Tom",
    date: "11-11-2023",
    views: 12,
  },
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Board = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination size="lg">{items}</Pagination>
      </div>
      <h1>Board Page</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>#</th>
                <th style={{ width: "70%" }}>Title</th>
                <th style={{ width: "5%" }}>Author</th>
                <th style={{ width: "10%" }}>Date</th>
                <th style={{ width: "5%" }}>Views</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>
                    <Card.Header>
                      <CustomToggle eventKey="0"> {task.title}</CustomToggle>{" "}
                    </Card.Header>
                  </td>
                  <td>{task.author}</td>
                  <td>{task.date}</td>
                  <td>{task.views}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ display: "flex", justifyContent: "center" }}>
              Kendo!!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OffCanvasExample key={"bottom"} placement={"bottom"} name={"Create"} />
      </div>
    </div>
  );
};
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create your board</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container style={{ width: "50%" }}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formBoardName">
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Enter board name" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBoardDescription"
              >
                <Form.Label column sm="2">
                  Board Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="textarea"
                    placeholder="Enter board description"
                    rows={3}
                  />
                </Col>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Board;
