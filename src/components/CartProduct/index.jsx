import "./style.css";

const CartProduct = ({ item: { id, name, category, img }, deleteProduct }) => {
  return (
    <li className="cartProduct">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="cartProductInfo">
        <div>
          <h3>{name}</h3>
          <button onClick={() => deleteProduct(id)}>Remover</button>
        </div>
        <span> {category} </span>
      </div>
    </li>
  );
};

export default CartProduct;
