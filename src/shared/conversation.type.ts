import { ReactNode } from "react";
import { Contact } from "./contact.type";
import { Message } from "./message.type";

export type Conversation = {
  recipients: Contact[];
  messages: Message[];
  selectedConversation: boolean;
  id: string;
};

export type ConversationContext = {
  conversations: Conversation[];
  contacts: Contact[];
  user: Contact;
  selectedConversation: Conversation;
  createContact: (user: Contact) => void;
  createUser: (user: Contact) => void;
  createConversation: (receivers: Contact[]) => void;
  selectConversation: (index: string) => void;
  sendMessage: (text: string, conversationId: string) => void;
};

export type ConversationProvideProps = {
  children: ReactNode;
};
