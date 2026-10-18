
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">
          🍕 Nuestras Pizzas
        </h2>

        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
