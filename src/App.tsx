import React from "react";
import Dashboard from "./components/Dashboard";
import { ConversationProvider } from "./contexts/ConversationsProvider";

function App() {
  return (
    <div className="App">
      <ConversationProvider>
        <Dashboard></Dashboard>
      </ConversationProvider>
    </div>
  );
}

export default App;
