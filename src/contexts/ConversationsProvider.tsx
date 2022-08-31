import React, { createContext, useContext, useState } from "react";
import { Contact } from "../shared/contact.type";
import {
  Conversation,
  ConversationContext,
  ConversationProvideProps,
} from "../shared/conversation.type";
import { Message } from "../shared/message.type";

const ConversationsContext = createContext({} as ConversationContext);

export function useConversationContext() {
  return useContext(ConversationsContext);
}

export function ConversationProvider({ children }: ConversationProvideProps) {
  const [conversations, setConversation] = useState<Conversation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [user, setUser] = useState<Contact>({} as Contact);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>({} as Conversation);

  const createContact = (user: Contact) => {
    setContacts((prevContact) => {
      return [...prevContact, user];
    });
  };

  const createUser = (user: Contact) => {
    setUser(user);
  };

  const createConversation = (receivers: Contact[]) => {
    const newConversations: Conversation[] = receivers.map((c) => {
      return {
        id: Math.floor(Math.random() * 100) + "",
        messages: [],
        recipients: [user, c],
        selectedConversation: false,
      };
    });

    setConversation((prevVal) => {
      return [...prevVal, ...newConversations];
    });
  };

  const selectConversation = (index: string) => {
    conversations.filter((c) => {
      c.id === index
        ? (c.selectedConversation = true) && setSelectedConversation(c)
        : (c.selectedConversation = false);

      setConversation([...conversations]);
    });
  };

  const sendMessage = (text: string, conversationId: string) => {
    const message: Message = { sender: user, textMessage: text };

    conversations.filter((c) => {
      if (c.id === conversationId) {
        c.messages.push(message);
        setConversation([...conversations]);
      }
    });
  };

  console.log(conversations);
  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        contacts,
        user,
        selectedConversation,
        createContact,
        createUser,
        createConversation,
        selectConversation,
        sendMessage,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}
