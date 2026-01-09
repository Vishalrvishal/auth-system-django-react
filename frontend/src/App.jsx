import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/core/reset.css";
import "./styles/core/tokens.css";
import "./styles/core/typography.css";

import "./styles/layout/shell.css";
import "./styles/layout/grid.css";

import "./styles/components/cards.css";
import "./styles/components/filters.css";
import "./styles/components/modal.css";
import "./styles/components/buttons.css";

import "./styles/animations/motion.css";
import "./styles/responsive/breakpoints.css";
import "./styles/global.css";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify/:token" element={<Verify />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
