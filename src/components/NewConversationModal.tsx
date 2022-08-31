import React, { useState } from "react";
import { useConversationContext } from "../contexts/ConversationsProvider";
import { Modal, Form, Button } from "react-bootstrap";
import { Contact } from "../shared/contact.type";

type NewConversationModalProps = {
  closeModal: () => void;
};

const NewConversationModal = ({ closeModal }: NewConversationModalProps) => {
  const { contacts, createConversation } = useConversationContext();
  const [contactList, setContactList] = useState<Contact[]>();

  const submitModalHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (contacts) {
      createConversation(contacts);
      closeModal();
    }
  };

  const onChangeCheckHandler = (
    contact: Contact,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      contactList
        ? setContactList([...contactList, contact])
        : setContactList([contact]);
    } else {
      setContactList(contactList?.filter((c) => c.id !== contact.id));
    }
  };


  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitModalHandler}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                label={contact.name}
                onChange={(e) => onChangeCheckHandler(contact, e)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
