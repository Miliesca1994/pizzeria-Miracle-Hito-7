
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404 🍕</h1>
      <h2>¡Ups! Página no encontrada</h2>

      <p className="mt-3">
        Parece que esta pizza no está en nuestro menú.
      </p>

      <Link to="/" className="btn btn-danger mt-3">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
