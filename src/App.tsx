import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Register } from "./pages/register";
import { Login } from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
