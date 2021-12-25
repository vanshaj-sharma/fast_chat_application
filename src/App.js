import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="Admin"
      userSecret="123"
      projectID="1341fd9d-72c6-49d8-934a-176059f6728c"
    />
  );
};

export default App;
