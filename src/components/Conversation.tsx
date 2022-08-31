import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversationContext } from "../contexts/ConversationsProvider";

const Conversation = () => {
  const { conversations, selectConversation } = useConversationContext();
  const selectConversationIndex = (id: string) => {
    if (id) selectConversation(id);
  };

  return (
    <div>
      <ListGroup variant="flush">
        {conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(conversation.id)}
            active={conversation.selectedConversation}
          >
            {conversation.recipients.map((r) => r.name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Conversation;
