import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <Card>
        <div
          className="row no-gutters"
          style={{ width: "70rem", height: "30rem" }}
        >
          <div className="col-md-4" style={{ width: "40%" }}>
            <Card.Img
              variant="top"
              src="kendo_main.jpg"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8" style={{ width: "60%" }}>
            <Card.Body
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2>Login</h2>
              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  style={{ marginTop: "3rem" }}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  style={{ marginTop: "1rem" }}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicCheckbox"
                  style={{ marginTop: "1rem" }}
                >
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
