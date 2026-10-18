
import { Link } from "react-router-dom";
import { pizzas } from "../pizzas";

const Pizza = () => {
  const pizza = pizzas.find(
    (item) => item.id.toLowerCase() === "p001"
  );

  if (!pizza) {
    return (
      <div className="container text-center mt-5">
        <h2>Pizza no encontrada</h2>
        <Link to="/" className="btn btn-danger">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow">
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <h2 className="text-capitalize">
            🍕 {pizza.name}
          </h2>

          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>

          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h3>

          <button className="btn btn-success mt-3">
            Añadir al carrito 🛒
          </button>

          <div className="mt-3">
            <Link to="/" className="btn btn-outline-dark">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
