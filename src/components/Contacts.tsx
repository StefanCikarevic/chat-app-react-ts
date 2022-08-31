import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversationContext } from "../contexts/ConversationsProvider";

const Contacts = () => {
  const { contacts } = useConversationContext();
  
  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default Contacts;
