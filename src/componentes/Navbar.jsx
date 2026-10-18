
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Pizzeria Miracle since 1994
      </Link>

      <div className="d-flex gap-2 flex-wrap">
        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        <Link to="/login" className="btn btn-outline-light">
          🔐 Login
        </Link>

        <Link to="/register" className="btn btn-outline-light">
          📝 Register
        </Link>

        <Link to="/profile" className="btn btn-outline-light">
          👤 Profile
        </Link>

        <Link to="/cart" className="btn btn-warning">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
