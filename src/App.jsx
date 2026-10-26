
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";

import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" replace />}
        />

        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" replace />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/pizza/:id" element={<Pizza />} />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" replace />}
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
