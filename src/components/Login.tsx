import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import { useConversationContext } from "../contexts/ConversationsProvider";
import { Contact } from "../shared/contact.type";

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const { createUser } = useConversationContext();

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (idRef?.current?.value) {
      const user: Contact = {
        id: uuidV4(),
        name: idRef.current.value,
      };
      createUser(user);
    }
  };

  const createNewIdHandler = () => {
    if (idRef?.current?.value) {
      const user: Contact = {
        id: uuidV4(),
        name: idRef.current.value,
      };
      createUser(user);
    }
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={submitFormHandler}>
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" style={{ margin: "5px 10px 0 0 " }}>
          Login
        </Button>
        <Button
          onClick={createNewIdHandler}
          variant="secondary"
          style={{ margin: "5px 10px 0 0 " }}
        >
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
