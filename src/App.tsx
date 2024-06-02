import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carona-go" element={<Dashboard />} />
      <Route path="/carona-share" element={<Dashboard />} />
      <Route path="/payments" element={<Dashboard />} />
      <Route path="/transactions" element={<Dashboard />} />
      <Route path="/settings" element={<Dashboard />} />
      <Route path="/support" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
