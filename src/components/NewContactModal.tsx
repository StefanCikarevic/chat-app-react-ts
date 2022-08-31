import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useConversationContext } from "../contexts/ConversationsProvider";
import { Contact } from "../shared/contact.type";

type NewContactModalProps = {
  closeModal: () => void;
};

const NewContactModal = ({ closeModal }: NewContactModalProps) => {
  const idRef = useRef<HTMLInputElement>(null);
  const idName = useRef<HTMLInputElement>(null);
  const { createContact } = useConversationContext();

  const submitModalHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (idRef?.current?.value && idName?.current?.value) {
      const user: Contact = {
        id: idRef.current.value,
        name: idName.current.value,
      };
      createContact(user);
    }
    closeModal();
  };
  return (
    <div>
      <Modal.Header>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitModalHandler}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={idName} required></Form.Control>
          </Form.Group>
          <Button type="submit" style={{margin:'5px 0 0 0 '}}>Create</Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default NewContactModal;
