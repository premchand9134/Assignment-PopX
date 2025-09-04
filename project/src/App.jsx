import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <div className="min-h-screen max-w-md mx-auto bg-white">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
