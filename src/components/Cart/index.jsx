import "./style.css";

import { useState, useEffect } from "react";

import CartProduct from "../CartProduct";

const Cart = ({ list, setList }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const [emptyCart, setEmptyCart] = useState(false);

  const deleteProduct = (productId) => {
    const filteredList = list.filter((item) => item.id !== productId);
    setList(filteredList);
    setTotalPrice();
  };

  const deleteAllProducts = () => {
    setList([]);
    setTotalPrice();
  };

  useEffect(() => {
    if (list.length === 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }

    const newPrice = list.reduce((previous, actual) => {
      return previous + actual.price;
    }, 0);

    setTotalPrice(formatter.format(newPrice));
  }, [list]);

  return (
    <>
      <h3 className="cartHeader">Carrinho de compras</h3>
      {emptyCart && (
        <div className="emptyCart">
          <h3>Sua Sacola está Vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
      {!emptyCart && (
        <>
          <ul className="productsList">
            {list.map((item) => (
              <CartProduct
                key={item.id}
                item={item}
                deleteProduct={() => deleteProduct(item.id, item.price)}
              />
            ))}
          </ul>
          <div className="totalPrice">
            <p>Total</p>
            <p className="price">{totalPrice}</p>
          </div>
          <button className="deleteAllButton" onClick={deleteAllProducts}>
            Remover Todos
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
