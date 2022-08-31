import React from "react";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useConversationContext } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";

const Dashboard = () => {
  const { user, selectedConversation } = useConversationContext();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {user.id ? <Sidebar></Sidebar> : <Login></Login>}
      {selectedConversation.messages && <OpenConversation></OpenConversation>}
    </div>
  );
};

export default Dashboard;
