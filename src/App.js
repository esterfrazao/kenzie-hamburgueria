import "./App.css";

import { useState, useEffect } from "react";

import logo from "./logo.svg";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

const App = () => {
  const [listProducts, setListProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) =>
        setListProducts(
          res.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
        )
      )
      .catch((error) => console.log(error));
  }, [filter]);

  const handleClick = (productId) => {
    const target = listProducts.find(({ id }) => productId === id);
    if (!cartList.some(({ id }) => id === productId)) {
      setCartList([...cartList, target]);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilter(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <div className="App">
      {error && (
        <div className="MensagemErro">
          <h2>O produto só pode ser adicionado uma única vez!</h2>
        </div>
      )}

      <header>
        <div className="logoContainer">
          <img
            className="pageLogo"
            src={logo}
            alt="logo"
            onClick={() => setFilter("")}
          />
        </div>
        <div className="searchContainer">
          <form onSubmit={handleSearch}>
            <div className="searchInput">
              <input type="text" placeholder="Digitar produto" />
              <button className="searchButton" type="submit">
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </header>
      <section className="interface">
        <main>
          {filter && (
            <p className="searchResult">
              Resultado para: <span> {filter} </span>
            </p>
          )}
          <ProductsList list={listProducts} handleClick={handleClick} />
        </main>
        <aside className="cartContainer">
          <Cart list={cartList} setList={setCartList} />
        </aside>
      </section>
    </div>
  );
};

export default App;
