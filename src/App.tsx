import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home.page";
import { Register } from "./pages/register.page";
import { Login } from "./pages/login.page";
import { Dashboard } from "./components/dashboard/dashboard";
import { CaronaGoPage } from "./pages/carona-go.page";
import { CaronaSharePage } from "./pages/carona-share.page";
import { Verify } from "./pages/verify.page";
import { TripsPage } from "./pages/trips.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />

      <Route path="/dashboard/" element={<Dashboard />}>
        <Route path="carona-go" element={<CaronaGoPage />} />
        <Route path="carona-share" element={<CaronaSharePage />} />
        <Route path="payments" element={<CaronaSharePage />} />
        <Route path="trips" element={<TripsPage />} />
        <Route path="settings" element={<CaronaSharePage />} />
        <Route path="support" element={<CaronaSharePage />} />
      </Route>
    </Routes>
  );
}

export default App;
