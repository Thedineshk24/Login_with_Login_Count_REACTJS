import React, { useState, useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Button,
  InputGroup,
} from "reactstrap";
import { FirebaseAuth } from "react-firebaseui";
import { Welcome } from "./Welcome";

function Sign_in() {
  const [emailname, setEmailname] = useState("Admin@gmail.com");
  const [password, setPassword] = useState("1234");

  let [currentEname, setCurrentEname] = useState("");
  let [currentpassword, setCurrentPassword] = useState("");

  let [count, setCount] = useState(1);

  const handleLogin = (e) => {
    if (emailname == currentEname && password == currentpassword) {
      setCount(count+ 1);
    }

    e.preventDefault();
  };

  return (
    <Container fluid App>
    <h1 className="text-center text-primary"> Login Form</h1>
      <Form onSubmit={handleLogin}>
        <InputGroup>
          <Col md="10" className="mt-4 mb-2 ml-4">
            <Input
              type="email"
              placeholder="enter email"
              onChange={(e) => setCurrentEname(e.target.value)}
            />{" "}
            <br />
            <Input
              type="password"
              placeholder="*****"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />{" "}
            <br />
            <center>
              <Button color="success"> Login </Button>
            </center>
          </Col>
        </InputGroup>
      </Form>
      <Row>

      {/* LOGICAL RENDERING FOR TOTAL VISIT COUNT */}
        <Col className="mt-2">
          {emailname === currentEname && password === currentpassword ? (
              <Welcome count={count}/> 
          ) : (
            undefined
          )}

        </Col>
      </Row>
    </Container>
  );
}

export default Sign_in;
