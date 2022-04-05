import CartProduct from "../CartProduct";
import "./style.css";

function Cart({ list, setter }) {
  const deleteProduct = (productId) => {
    console.log(productId);
    fetch(
      `https://hamburgueria-kenzie-json-serve.herokuapp.com/products/${productId}`
    )
      .then((res) => res.json())
      .then((res) => setter(list.filter((item) => item !== res)))
      .catch((error) => console.log(error));
  };

  const deleteAllProducts = () => setter([]);

  return (
    <>
      <h3>Carrinho de compras</h3>
      <ul>
        {list.map((item) => (
          <CartProduct key={item.id} item={item} callback={deleteProduct} />
        ))}
      </ul>
      <button onClick={deleteAllProducts}>Remover Todos</button>
    </>
  );
}

export default Cart;
