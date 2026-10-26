
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const obtenerPizza = async () => {
      setLoading(true);
      setError(false);
      setPizza(null);

      try {
        const respuesta = await fetch(
  `/api/pizzas/${id}`,
  { signal: controller.signal }
);

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la pizza");
        }

        const data = await respuesta.json();
        setPizza(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    obtenerPizza();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <h3>Cargando pizza... 🍕</h3>
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <div className="container text-center mt-5">
        <h2>Pizza no encontrada</h2>
        <p>No se pudo cargar la información de la pizza.</p>
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

          <button
            className="btn btn-success mt-3"
            onClick={() => addToCart(pizza)}
          >
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
