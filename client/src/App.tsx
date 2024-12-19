import { BrowserRouter as Router } from "react-router-dom";
import { RouterConfig } from "./routes";
import AuthProvider from "./context/AuthProvider";
import "./App.css";
import { useAuth } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </Router>
  );
}

export default App;
