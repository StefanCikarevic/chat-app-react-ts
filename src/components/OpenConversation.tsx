import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversationContext } from "../contexts/ConversationsProvider";

const OpenConversation = () => {
  const [text, setText] = useState("");
  const { user, conversations, sendMessage } = useConversationContext();

  const selectedConversation = conversations.find(
    (c) => c.selectedConversation === true
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (selectedConversation) sendMessage(text, selectedConversation?.id);
    setText("");
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      Open Conversation
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation?.messages.map((message, index) => {
            return (
              <div
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.sender.id === user.id
                    ? "align-self-end align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.sender.id === user.id
                      ? "bg-primary text-white"
                      : "border"
                  }`}
                >
                  {message.textMessage}
                </div>
                <div
                  className={`text-muted small ${
                    message.sender.id === user.id ? "text-right" : ""
                  }`}
                >
                  {message.sender.id === user.id ? "You" : message.sender.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
          </InputGroup>
          <Button type="submit">Send</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OpenConversation;
