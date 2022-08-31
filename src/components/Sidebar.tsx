import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import { SelectCallback } from "../shared/shared.type";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";
import { useConversationContext } from "../contexts/ConversationsProvider";

const Sidebar = () => {
  const { user } = useConversationContext();
  const [key, setKey] = useState("conversation");
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = key === "conversation" ? true : false;
  const onSelectHandler: SelectCallback = (value) => {
    if (value) setKey(value);
  };
  const modalHideHandler = () => {
    setModalOpen(false);
  };

  const onClickButtonHandler = () => {
    setModalOpen(true);
  };
  return (
    <div
      style={{
        width: "350px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        height: "100vh",
      }}
      className="d-flex flex-column"
    >
      <Tab.Container activeKey={key} onSelect={onSelectHandler}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversation">Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="overflow-auto flex-grow-1">
          <Tab.Pane eventKey="conversation">
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey="contacts">
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Name: <span className="text-muted">{user.name}</span>
        </div>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{user.id}</span>
        </div>
        <Button className="rounded-0" onClick={onClickButtonHandler}>
          New {conversationsOpen ? "Conversations" : "Contacts"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={modalHideHandler}>
        {conversationsOpen ? (
          <NewConversationModal
            closeModal={modalHideHandler}
          ></NewConversationModal>
        ) : (
          <NewContactModal closeModal={modalHideHandler}></NewContactModal>
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
