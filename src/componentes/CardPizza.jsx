
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id,
      name,
      price,
      ingredients,
      img,
    });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={img}
          className="card-img-top"
          alt={name}
        />

        <div className="card-body">
          <h3 className="card-title">{name}</h3>

          <h4 className="text-danger">
            ${price.toLocaleString("es-CL")}
          </h4>

          <p className="card-text">
            <strong>Ingredientes:</strong>
          </p>

          <ul>
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <Link
              to={`/pizza/${id}`}
              className="btn btn-outline-primary"
            >
              Ver más
            </Link>

            <button
              className="btn btn-success"
              onClick={handleAdd}
            >
              🛒 Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
