
import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-4">🛒 Detalles del pedido:</h3>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío. ¡Agrega una pizza!
        </div>
      ) : (
        <>
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                />

                <h5 className="ms-3 text-capitalize">
                  {pizza.name}
                </h5>
              </div>

              <div className="d-flex align-items-center gap-3">
                <strong>
                  ${pizza.price.toLocaleString("es-CL")}
                </strong>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </button>

                <span>{pizza.count}</span>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <h3 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button
        className="btn btn-dark mt-3"
        disabled={!token || cart.length === 0}
      >
        Pagar
      </button>

      {!token && (
        <div className="alert alert-warning mt-3">
          Debes iniciar sesión para realizar el pago.
        </div>
      )}
    </div>
  );
};

export default Cart;

