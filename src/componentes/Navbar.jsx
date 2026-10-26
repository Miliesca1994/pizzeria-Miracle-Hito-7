
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Pizzeria Miracle since 1994
      </Link>

      <div className="d-flex gap-2 flex-wrap">
        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              👤 Profile
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger"
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              📝 Register
            </Link>
          </>
        )}

        <Link to="/cart" className="btn btn-warning">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
